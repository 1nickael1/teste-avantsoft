import { ClienteForm } from '@/components/clients/ClienteForm';
import { ClienteList } from '@/components/clients/ClienteList';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useClientStore } from '@/stores/clientStore';
import type { Cliente, ClienteFormData } from '@/types';
import React, { useEffect, useState } from 'react';

export const ClientesPage: React.FC = () => {
  const { clientes, loading, error, createCliente, updateCliente, deleteCliente, fetchClientes } = useClientStore();

  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);
  const [showForm, setShowForm] = useState(false);
  const [editingCliente, setEditingCliente] = useState<Cliente | undefined>();
  const [formLoading, setFormLoading] = useState(false);

  const handleCreate = async (data: ClienteFormData) => {
    setFormLoading(true);
    try {
      await createCliente(data);
      setShowForm(false);
    } finally {
      setFormLoading(false);
    }
  };

  const handleUpdate = async (data: ClienteFormData) => {
    if (!editingCliente) return;
    
    setFormLoading(true);
    try {
      await updateCliente(editingCliente.id, data);
      setEditingCliente(undefined);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteCliente(id);
  };

  const handleEdit = (cliente: Cliente) => {
    setEditingCliente(cliente);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingCliente(undefined);
  };

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-destructive">Erro ao carregar clientes: {error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Clientes</h1>
          <p className="text-muted-foreground">Gerencie os clientes do sistema</p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          Adicionar Cliente
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingCliente ? 'Editar Cliente' : 'Novo Cliente'}</CardTitle>
          </CardHeader>
          <CardContent>
            <ClienteForm
              cliente={editingCliente}
              onSubmit={editingCliente ? handleUpdate : handleCreate}
              onCancel={handleCancel}
              loading={formLoading}
            />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <ClienteList
            clientes={clientes}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
          />
        </CardContent>
      </Card>
    </div>
  );
}; 