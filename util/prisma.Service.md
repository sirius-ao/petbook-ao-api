

 async onModuleInit() {
       // await this.$connect();
       await this.retryConextion();
    }

    private async retryConextion(retries = 5, delay =3000): Promise<void>{
        for (let index = 0; index < retries; index++) {
         try {
            await this.$connect();
            console.log('✅ Prisma conectado com sucesso!');
            return;
         } catch (error) {
            console.error(`❌ Tentativa ${index + 1} de conexão com o banco falhou...`);
                if (index<retries-1) await new Promise(res => setTimeout(res,delay));
                else throw new Error('Não foi possível conectar ao banco de dados.');
         }
            
        }
    }

    async shutDownHook(app: INestApplication){
        process.on('beforeExit', async ()=>{
            await app.close();
        })
    }