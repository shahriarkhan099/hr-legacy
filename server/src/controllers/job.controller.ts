import { Request, Response } from "express";
import { createJob, findAllJob } from "../models/job/job.query";

export async function postJob (req: Request, res: Response) {
    try {
        const { jobRole, experience, skillTags, hourlyRate} = req.body;
        if (jobRole && experience && skillTags && hourlyRate) {
            const job = await createJob({
                jobRole, experience, skillTags, hourlyRate
            });
            res.status(201).json(job);
        } else res.status(400).json({message: 'Invalid job fields.'})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function getAllJob (req: Request, res: Response) {
    try {
        const jobs = await findAllJob();
        res.json({ data: jobs });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }    
}