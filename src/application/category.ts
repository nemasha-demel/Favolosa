import Category from "../infrastructure/db/entities/Category";
import ValidationError from "../domain/errors/validation-error";
import NotFoundError from "../domain/errors/not-found-error";
import {Request, Response, NextFunction} from "express"

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, "") 
}



const getAllCategories = async (req:Request, res:Response,next:NextFunction) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    next(error);
    
  }
};

const createCategory = async (req:Request, res:Response,next:NextFunction) => {
  try {
    const newCategory = req.body;
    if(!newCategory.name){
      throw new ValidationError("Category name is required");
    }
    const slug = generateSlug(newCategory.name);
    const existing = await Category.findOne({ slug });
    if (existing) {
      throw new ValidationError("Category already exists");
    }

    const category = await Category.create({ ...newCategory, slug });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
  
};

const getCategoryById = async (req:Request, res:Response,next:NextFunction) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      throw new NotFoundError("Categoty Not found");
    }

    res.json(category);
  } catch (error) {
    next(error);
  }
  
};

const updateCategoryById = async (req:Request, res:Response,next:NextFunction) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    });

    if (!category) {
      throw new NotFoundError("Categoty Not found");
    }

    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
  
};

const deleteCategoryById = async (req:Request, res:Response,next:NextFunction) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      throw new NotFoundError("Categoty Not found");
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    next(error);
  }
  
};

export {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};