import { Router } from "express";

export const createRoutes = (expressRoutes: Router, router: Router) => {
    router.use('/api/v1', expressRoutes);
}