import { defineConfig } from 'vite'
export default defineConfig({
    base: '',
    build: {
        rollupOptions: {
            input: ["./index.html", "./SignIn.html", "./SignUp.html", "./Products.html", "./ChitariBass.html", "./ChitariAcustice.html", "./Ukulele.html", "./RecuperareParola.html", "./ChitariElectrice.html", "./Account.html" ]
        }
    }
})