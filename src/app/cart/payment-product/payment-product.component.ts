import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SaleProduct } from 'src/app/model/product/sale/saleproduct';
import { SaleproductService } from 'src/app/service/sale-service/saleproduct.service';
import { SizeProduct } from '../../model/product/sale/sizeproduct';
import { QuantityProduct } from '../../model/product/sale/quantityproduct';
import { QuantitySaleService } from '../../service/sale-service/quantity-sale-service.service';
import { SizeproductService } from '../../service/sale-service/sizeproduct.service';
import { CartService } from 'src/app/service/cart-payment/cart.service';
import { Cart } from 'src/app/model/cart-payment/cart';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-payment-product',
  templateUrl: './payment-product.component.html',
  styleUrls: ['./payment-product.component.css']
})
export class PaymentProductComponent implements OnInit {
  cartList: Cart[] = [];
  saleList: SaleProduct[] = [];
  sizeList: SizeProduct[] = [];
  quantityList: QuantityProduct[] = [];
  carts: any;
  users: any;
  information: FormGroup
  addInfo: FormGroup

  constructor(
    private cartService: CartService,
    private saleService: SaleproductService,
    private sizeService: SizeproductService,
    private authService: AuthService,
    private quantityService: QuantitySaleService,
    private active: ActivatedRoute,
    private builder: FormBuilder
  ) {
    // this.information = this.builder.group({
    //   id: [''],
    //   firstname: [''],
    //   name: [''],
    //   password: [''],
    //   email: [''],
    //   role: ['', Validators.required],
    //   isactive: []
    // })
  }

  ngOnInit(): void {


    // this.route.queryParams.subscribe(params => {
    //   const saleP = params['saleProductId'];
    //   const quantityP = params['quantityProductId'];

    this.active.paramMap.subscribe(data => {
      this.users = data.get('id')
      this.authService.GetIdRole(this.users).subscribe((res: any) => {
        this.information.patchValue({
          id: res.id,
          firstname: res.firstname,
          name: res.name,
          password: res.password,
          email: res.email,
          role: res.role,
          isactive: res.isactive,
        })
      })
    })

    this.cartService.Getall().subscribe(data => {
      this.cartList = data;
    })

    this.quantityService.getAllQuantitySale().subscribe(data => {
      this.quantityList = data;
    })

    this.saleService.getAllSale().subscribe(data => {
      this.saleList = data;
    })

    this.sizeService.getAllSize().subscribe(data => {
      this.sizeList = data;
    })

  }

  total() {
    let total = 0;
    for (let item of this.cartList) {
      if (item.userId === this.users) {
        for (let p of this.quantityList) {
          if (item.quantityId == p.id) {
            for (let sale of this.saleList) {
              for (let size of this.sizeList) {
                if (p.idProduct == sale.id && p.idSize == size.idSize) {
                  total += sale.priceSale * item.numberOrders;
                }
              }
            }
          }
        }
      }
    }
    return total;
  }


}

