import express from 'express';
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} from '../controllers/recipe.controller.js';

const router = express.Router();

router.post('/', createRecipe);       // POST /api/recipes
router.get('/', getAllRecipes);       // GET /api/recipes
router.get('/:id', getRecipeById);    // GET /api/recipes/:id
router.put('/:id', updateRecipe);     // PUT /api/recipes/:id
router.delete('/:id', deleteRecipe);  // DELETE /api/recipes/:id

export default router;
