import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Cliente, ClienteFormData } from '@/types';
import React, { useEffect, useState } from 'react';

interface ClienteFormProps {
  cliente?: Cliente;
  onSubmit: (data: ClienteFormData) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

export const ClienteForm: React.FC<ClienteFormProps> = ({
  cliente,
  onSubmit,
  onCancel,
  loading = false
}) => {
  const [formData, setFormData] = useState<ClienteFormData>({
    nomeCompleto: '',
    email: '',
    dataNascimento: ''
  });
  const [errors, setErrors] = useState<Partial<ClienteFormData>>({});

  useEffect(() => {
    if (cliente) {
      setFormData({
        nomeCompleto: cliente.nomeCompleto,
        email: cliente.email,
        dataNascimento: cliente.dataNascimento
      });
    }
  }, [cliente]);

  const validateForm = (): boolean => {
    const newErrors: Partial<ClienteFormData> = {};

    if (!formData.nomeCompleto.trim()) {
      newErrors.nomeCompleto = 'Nome completo é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.dataNascimento) {
      newErrors.dataNascimento = 'Data de nascimento é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await onSubmit(formData);
      } catch (error) {
        console.error('Erro ao salvar cliente:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="nomeCompleto">Nome Completo</Label>
        <Input
          id="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={(e) => setFormData(prev => ({ ...prev, nomeCompleto: e.target.value }))}
          placeholder="Digite o nome completo"
          required
        />
        {errors.nomeCompleto && (
          <Alert variant="destructive">
            <AlertDescription>{errors.nomeCompleto}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="Digite o email"
          required
        />
        {errors.email && (
          <Alert variant="destructive">
            <AlertDescription>{errors.email}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="dataNascimento">Data de Nascimento</Label>
        <Input
          id="dataNascimento"
          type="date"
          value={formData.dataNascimento}
          onChange={(e) => setFormData(prev => ({ ...prev, dataNascimento: e.target.value }))}
          required
        />
        {errors.dataNascimento && (
          <Alert variant="destructive">
            <AlertDescription>{errors.dataNascimento}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={loading}
          className="w-full sm:w-auto"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto"
        >
          {loading ? 'Salvando...' : (cliente ? 'Atualizar' : 'Criar')}
        </Button>
      </div>
    </form>
  );
}; 