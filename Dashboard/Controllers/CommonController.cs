﻿using Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Dashboard.Services.Interfaces;
using Dashboard.API.ViewModels;

namespace Dashboard.Controllers
{
    [Route("api/[controller]")]
    public class CommonController : Controller
    {
        ICategoryService _categoryService;

        public CommonController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }


        public IActionResult Index()
        {
            return View();
        }

        [Route("categories")]
        [HttpGet]
        public async Task<Page<CategoryViewModel>> GetCategories(int pageIndex)
        {
            return await _categoryService.GetCategories(pageIndex);
        }

        [Authorize]
        [Route("category")]
        [HttpPost]
        public async Task AddCategory([FromBody] CategoryModel category)
        {
            await _categoryService.AddCategory(category);
        }

        [Authorize]
        [Route("category")]
        [HttpDelete]
        public async Task DeleteCategory(int categoryId)
        {
            await _categoryService.DeleteCategory(categoryId);
        }
    }
}
