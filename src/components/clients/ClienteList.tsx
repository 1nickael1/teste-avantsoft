import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Cliente } from '@/types';
import React from 'react';

interface ClienteListProps {
  clientes: Cliente[];
  onEdit: (cliente: Cliente) => void;
  onDelete: (id: string) => void;
  loading?: boolean;
}

export const ClienteList: React.FC<ClienteListProps> = ({
  clientes,
  onEdit,
  onDelete,
  loading = false
}) => {
  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  const calcularTotalVendas = (vendas: Cliente['vendas']) => {
    return vendas.reduce((total, venda) => total + venda.valor, 0);
  };

  const limitarNome = (nome: string) => {
    const nomeLimitado = nome.substring(0, 10);
    return nomeLimitado.length == nome.length ? nome : nomeLimitado + '...';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-muted-foreground">Carregando clientes...</div>
      </div>
    );
  }

  if (clientes.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Nenhum cliente encontrado.
      </div>
    );
  }

  return (
    <div className="rounded-md border overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[150px]">Nome</TableHead>
              <TableHead className="hidden sm:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Data de Nascimento</TableHead>
              <TableHead className="min-w-[120px]">Total de Vendas</TableHead>
              <TableHead className="hidden lg:table-cell">Letra Ausente</TableHead>
              <TableHead className="min-w-[120px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clientes.map((cliente) => (
              <TableRow key={cliente.id}>
                <TableCell className="font-medium">
                  <div>
                    <div className="font-medium">{limitarNome(cliente.nomeCompleto)}</div>
                    <div className="text-xs text-muted-foreground sm:hidden">
                      {cliente.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{cliente.email}</TableCell>
                <TableCell className="hidden md:table-cell">{formatarData(cliente.dataNascimento)}</TableCell>
                <TableCell>
                  <div className="text-sm">
                    R$ {calcularTotalVendas(cliente.vendas).toFixed(2)}
                  </div>
                  <div className="text-xs text-muted-foreground lg:hidden">
                    {formatarData(cliente.dataNascimento)}
                  </div>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <Badge variant="secondary">
                    {cliente.letraAusente}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(cliente)}
                      className="text-xs"
                    >
                      Editar
                    </Button>
                    <ConfirmDialog
                      title="Excluir Cliente"
                      description={`Tem certeza que deseja excluir o cliente "${cliente.nomeCompleto}"? Esta ação não pode ser desfeita.`}
                      confirmText="Excluir"
                      cancelText="Cancelar"
                      variant="destructive"
                      onConfirm={() => onDelete(cliente.id)}
                    >
                      <Button
                        variant="destructive"
                        size="sm"
                        className="text-xs"
                      >
                        Excluir
                      </Button>
                    </ConfirmDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}; 