# Usando uma imagem base do Python
FROM python:3.9-slim

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar o requirements.txt e instalar as dependências
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o restante do código do projeto
COPY . /app/

# Expor a porta que o Django usa
EXPOSE 8000

# Rodar o servidor Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
