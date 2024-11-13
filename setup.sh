#!/bin/bash

# Create main directories
mkdir -p Nextap-PWA/{app/{public,src/{assets/{images,styles},components/{Auth,Dashboard,QRCode,Wallet},contexts,hooks,i18n,pages,redux/{slices},services,utils},tests},service/{controllers,domain/{entities,services,repositories},routes,middlewares,config,utils,tests}}

# Create frontend files
touch Nextap-PWA/app/.babelrc \
      Nextap-PWA/app/webpack.config.js \
      Nextap-PWA/app/.env \
      Nextap-PWA/app/package.json \
      Nextap-PWA/app/public/{index.html,manifest.json,service-worker.js,favicon.ico} \
      Nextap-PWA/app/src/{App.js,index.js,routes.js,PWA.js} \
      Nextap-PWA/app/src/assets/styles/{main.scss,variables.scss} \
      Nextap-PWA/app/src/components/Auth/{Login.js,Signup.js,NFCLogin.js} \
      Nextap-PWA/app/src/components/Dashboard/{UserProfile.js,TransactionHistory.js,SendMoney.js} \
      Nextap-PWA/app/src/components/QRCode/{QRCodeGenerator.js,QRCodeScanner.js} \
      Nextap-PWA/app/src/components/Wallet/{WalletCreation.js,WalletBalance.js} \
      Nextap-PWA/app/src/contexts/AuthContext.js \
      Nextap-PWA/app/src/hooks/useAuth.js \
      Nextap-PWA/app/src/i18n/{en.json,es.json,i18n.js} \
      Nextap-PWA/app/src/pages/{HomePage.js,DashboardPage.js,AdminPage.js,NotFound.js} \
      Nextap-PWA/app/src/redux/{store.js,slices/{authSlice.js,userSlice.js,walletSlice.js}} \
      Nextap-PWA/app/src/services/{api.js,nfcService.js,qrCodeService.js} \
      Nextap-PWA/app/src/utils/{apiHelpers.js,qrCodeUtils.js,blockchainUtils.js}

# Create backend files
touch Nextap-PWA/service/{server.js,app.js,.env,package.json} \
      Nextap-PWA/service/controllers/{authController.js,paymentController.js,userController.js,adminController.js} \
      Nextap-PWA/service/domain/entities/{User.js,Wallet.js,Transaction.js} \
      Nextap-PWA/service/domain/services/{WalletService.js,PaymentService.js,AuthService.js} \
      Nextap-PWA/service/domain/repositories/{userRepository.js,walletRepository.js,transactionRepository.js} \
      Nextap-PWA/service/routes/{authRoutes.js,paymentRoutes.js,userRoutes.js,adminRoutes.js} \
      Nextap-PWA/service/middlewares/{authMiddleware.js,errorHandler.js} \
      Nextap-PWA/service/config/{dbConfig.js,blockchainConfig.js,env.js} \
      Nextap-PWA/service/utils/{logger.js,validator.js,apiHelpers.js} \
      Nextap-PWA/service/tests/{authTests.js,paymentTests.js,userTests.js,walletTests.js}

# Create additional project files
mkdir -p Nextap-PWA/{docs,scripts}
touch Nextap-PWA/docs/{README.md,API_Documentation.md,system_architecture.md,class_diagram.png} \
      Nextap-PWA/scripts/{start.sh,build.sh,deploy.sh} \
      Nextap-PWA/.gitignore \
      Nextap-PWA/README.md \
      Nextap-PWA/LICENSE

# Make shell scripts executable
chmod +x Nextap-PWA/scripts/*.sh

echo "Project structure created successfully!"