import { Request, Response } from "express";
import { createJob, deleteJob, findAllFullTimeJob, findAllJob, findAllJobForRestaurant, findAllPartTimeJob, findJobBySearchTerm } from "../models/job/job.query";

export async function postJob (req: Request, res: Response) {
    try {
        const restaurantId = Number(req.params.restaurantId);
        const { jobRole, jobNature, jobDescription, experience, skillTags, hourlyRate, applicationDeadline, responsibilities} = req.body;
        const data = { jobRole, jobNature, jobDescription, experience, skillTags, hourlyRate, applicationDeadline, responsibilities}
        if (jobRole && experience && skillTags && hourlyRate) {
            const job = await createJob(restaurantId, data);
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

export async function getAllPartTimeJobs (req: Request, res: Response) {
    try {
        const jobs = await findAllPartTimeJob();
        res.json({ data: jobs });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }    
}

export async function getAllFullTimeJobs (req: Request, res: Response) {
    try {
        const jobs = await findAllFullTimeJob();
        res.json({ data: jobs });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }    
}

export async function getAllJobForRestaurant(req: Request, res: Response) {
    try {
        const restaurantId = Number(req.params.restaurantId);
        const jobs = await findAllJobForRestaurant(restaurantId);
        res.json({ data: jobs });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function searchJob (req: Request, res: Response) {
    const searchTerm = req.query.searchTerm as string;
    console.log(searchTerm)
    try {
        if (searchTerm) {
            console.log(searchTerm)
          const job = await findJobBySearchTerm(searchTerm);
          res.json({ data: job });
        } else res.json({ data: [] });
      } catch (error) {
        console.log(error);
        console.log('Hello');
        res.status(500).json(error);
      }
}

export async function deleteJobInfo (req: Request, res: Response) {
    const jobId = Number(req.params.jobId);
    try {
        const result = await deleteJob(jobId);
          if (result.success) {
              return res.status(200).json({ message: result.message });
          } else {
              return res.status(404).json({ message: result.message });
          }
    } catch(error) {
        console.log(error);
        res.status(500).json(error)
    }
}