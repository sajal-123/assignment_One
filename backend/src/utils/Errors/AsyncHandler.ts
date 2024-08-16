import { Request, Response, NextFunction } from 'express';

// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()=>{}
// const asyncHandler=(func)=>async()=>{}


// -----------promises wala-----------------

//  This asyncHandler is an higher order function means it access take function as a parameters

const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error: any) {
            console.error(error); // Log the error for debugging
            res.status(error.statusCode || 500).json({
                success: false,
                message: error.message || 'Internal Server Error'
            });
        }
    };

export { asyncHandler };


// -----------try catch wala-----------------
// const asyncHandler=(fn)=>async (req,res,next)=>{
//     try{
//     await fn(req,res,next)
//     }catch(error){
//         console.log(error.code || 5000,json({
//             success:false,
//             message:error.message
//         }))
//     }
// }

