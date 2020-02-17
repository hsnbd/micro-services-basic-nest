import {Controller, Get, Param, Post, Body, Put, Delete, Req} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Request } from 'express';

interface ProductDto {
    id: string;
    name: string;
}

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    getProducts(@Req() request: Request) {
        return [...this.productsService.getProducts()];
    }

    @Get(':id')
    getProduct(@Param() params) {
        console.log('get a single product', params.id);
        return this.productsService.getProducts().filter(p => p.id == params.id);
    }

    @Post()
    createProduct(@Body() product: ProductDto) {
        console.log('create product', product);
        this.productsService.createProduct(product);
    }

    @Put()
    updateProduct(@Body() product: ProductDto) {
        console.log('update product', product);
        this.productsService.updateProduct(product);
    }

    @Delete()
    deleteProduct(@Body() product: ProductDto) {
        console.log('delete product', product.id);
        this.productsService.deleteProduct(product.id);
    }
}