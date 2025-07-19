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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Data de Nascimento</TableHead>
            <TableHead>Total de Vendas</TableHead>
            <TableHead>Letra Ausente</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clientes.map((cliente) => (
            <TableRow key={cliente.id}>
              <TableCell className="font-medium">
                {cliente.nomeCompleto}
              </TableCell>
              <TableCell>{cliente.email}</TableCell>
              <TableCell>{formatarData(cliente.dataNascimento)}</TableCell>
              <TableCell>
                R$ {calcularTotalVendas(cliente.vendas).toFixed(2)}
              </TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {cliente.letraAusente}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(cliente)}
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
  );
}; 