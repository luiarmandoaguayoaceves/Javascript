# Notas para ejecutar app

## Pasos

1. Descargar Node js y npm
2. Instalar json-server mediante el siguiente comando
    ` npm install -g json-server `
3. Abre powershell como administrador y ejecuta el siguiente comando (ya que Por default Windows trae estas características des-habilitadas, y se requiere establecer esta política como Unrestricted para habilitarla. )
    ` Set-ExecutionPolicy Unrestricted `
4. despues levantamos el servidor local del archivo json que funcionara como API
    ` json-server --watch db.json --port 4000  `