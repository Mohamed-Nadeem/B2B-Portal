QSR-portal/
├── public/
│   ├── image.png
├── src/
│   ├── assets/                  # Static assets if needed
│   ├── components/              # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Login.tsx
│   │   ├── ForgetPassword.tsx
│   │   ├── Dashboard.tsx
│   │   ├── OrderSummary.tsx
│   │   ├── OrderSuccess.tsx
│   │   ├── ViewOrders.tsx
│   ├── context/                 # React contexts
│   │   ├── AuthContext.tsx
│   ├── data/                    # Mock data (already exists)
│   │   ├── products.ts
│   ├── types/                   # TypeScript types
│   │   ├── index.ts
│   ├── utils/                   # Utility functions (e.g., API calls)
│   │   ├── api.ts
│   ├── App.tsx                  # Main app with routing
│   ├── main.tsx                 # Entry point
│   ├── index.css                # Global styles (Tailwind included)
│   └── vite-env.d.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md