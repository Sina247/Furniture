"use client";

import { useState } from "react";
import Image from "next/image";

import "../app/bootstrap.rtl.css";
import "../app/globals.css";
import "../app/page.css";

export default function Layout() {
  const [selected, setPrice] = useState("واحد پول");
  const [select, setLang] = useState("زبان سایت");

  return (
    <html>
      <head>
        <title>Multikart Marketplace</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="https://laravel.pixelstrap.net/multikart/storage/3946/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </head>
      <body>
        {/* Top */}

        <section className="top">
          <div className="container top-container">
            <div className="row top-row">
              <div className="col-lg-6 d-flex top-h top-7">
                <p className="top-p">به فروشگاه مولتی‌ کارت خوش آمدید</p>

                <p className="top-call">با ما تماس بگیرید : ۰۹۱۹۱۵۰۱۲۹۳</p>
              </div>

              <div className="col-lg-6 d-flex justify-content-end align-items-center top-h">
                <div className="d-flex justify-content-end footer-col-4">
                  <div className="top-price">
                    <div className="dropdown">
                      <button className="top-select-price p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {selected}
                      </button>

                      <ul className="dropdown-menu" id="dropdownList">
                        <li className="text-center" onClick={() => setPrice("یورو اروپا")}>
                          <a className="dropdown-item">یورو اروپا</a>
                        </li>

                        <li className="text-center" onClick={() => setPrice("دلار امریکا")}>
                          <a className="dropdown-item">دلار امریکا</a>
                        </li>

                        <li className="text-center" onClick={() => setPrice("ریال ایران")}>
                          <a className="dropdown-item">ریال ایران</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="top-language">
                    <div className="dropdown">
                      <button className="top-select-language p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {select}
                      </button>

                      <ul className="dropdown-menu" id="dropdownList">
                        <li className="text-center" onClick={() => setLang("انگلیسی")}>
                          <a className="dropdown-item">انگلیسی</a>
                        </li>

                        <li className="text-center" onClick={() => setLang("فارسی")}>
                          <a className="dropdown-item">فارسی</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo */}

        <section className="container d-flex justify-content-between align-items-center logo">
          <button className="btn m-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
            <Image src="/menu.svg" width="25" height="25" layout="responsive" className="" alt="menu"></Image>
          </button>

          <div className="offcanvas offcanvas-start" id="offcanvasMenu">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">منو</h5>
            </div>

            <div className="offcanvas-body">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">خانه</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#collectionMenu">کلکسیون</a>
                  <div className="collapse" id="collectionMenu">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <a className="nav-link" href="#">دسته‌ بندی با نوار کناری چپ</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">دسته‌ بندی با نوار کناری راست</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">دسته‌بندی بدون ستون کناری</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">دسته‌بندی با شبکه ۲ تایی</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">دسته‌بندی با شبکه ۳ تایی</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">دسته‌بندی با شبکه ۴ تایی</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">لیست مجموعه محصولات</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">پیمایش اسلایدی دسته‌بندی‌ ها</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">سایدبار دسته‌بندی مجموعه</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">فیلتر محصولات در بخش بالایی</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">پنجره شناور سایدبار مجموعه</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">اسکرول بی‌ نهایت</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#productMenu">محصولات</a>
                  <div className="collapse" id="productMenu">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item-h5">
                        <h5 className="nav-link-h5">صفحه محصول</h5>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">پیش‌نمایش محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">تصاویر محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">اسلایدر تصاویر محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">نمایش جمع‌ شونده محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">نمایش ثابت محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">بخش‌ بندی عمودی محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">سایدبار چپ محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">سایدبار راست محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">صفحه محصول بدون سایدبار</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">پیش‌نمایش ستونی محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">تصویر کوچک محصول در قسمت بیرونی</a>
                      </li>

                      <li className="nav-item-h5">
                        <h5 className="nav-link-h5">شیوه نمایش گزینه‌ های محصول</h5>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">گزینه مستطیلی متغیر</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">گزینه دایره‌ای متغیر</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">نمونه تصویری متغیر</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">رنگ‌ بندی محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">دکمه رادیویی متغیر</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">گزینه‌های کشویی متغیر</a>
                      </li>

                      <li className="nav-item-h5">
                        <h5 className="nav-link-h5">قابلیت‌ و ویژگی های محصول</h5>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">محصول با طراحی ساده</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">محصول طبقه‌ بندی ‌شده</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">جدول راهنمای سایز بندی</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">حمل و نقل و بازگشت کالا</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">نقد و بررسی محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">درخواست راهنمایی از کارشناس</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">باندل تخفیفی (فروش همزمان محصولات مرتبط)</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">وضعیت فروش محصول پرطرفدار</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">موجودی به پایان رسید</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">زمان‌بندی پایان فروش ویژه</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">نمایش جزئیات محصول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">پرداخت بدون اسکرول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">تسویه‌حساب ایمن</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">اشتراک‌گذاری در سوشال مدیا</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">محصولات پیشنهادی</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">لیست خرید و مقایسه کالا ها</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#megaMenu">منوی پیشرفته</a>
                  <div className="collapse" id="megaMenu">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item-h5">
                        <h5 className="nav-link-h5">برند های محبوب</h5>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">تخته‌ موج‌ سواری سانست‌ گلاید</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">ادوپرفیوم انیگما</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">انبار درایولاین</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">بهشت عاشقان تکنولوژی</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">مد و فشن</a>
                      </li>

                      <li className="nav-item-h5">
                        <h5 className="nav-link-h5">دسته‌ های پرطرفدار</h5>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">تجهیزات تناسب اندام</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">لباس خواب زنانه</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">چمدان</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">ساعت</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#blogMenu">وبلاگ</a>
                  <div className="collapse" id="blogMenu">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <a className="nav-link" href="#">چیدمان شبکه‌ای با سایدبار چپ</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">چیدمان شبکه‌ای با سایدبار راست</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">چیدمان شبکه‌ای بدون سایدبار</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">لیست مقالات</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#pagesMenu">صفحات</a>
                  <div className="collapse" id="pagesMenu">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <a className="nav-link" href="#">اکانت من</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">داشبورد من</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">اعلان های من</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">مشخصات حساب بانکی</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">کیف پول من</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">دیدگاه های من</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">سفارش های من</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">سوابق بازگشت وجه</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">درباره ما</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">سوالات متداول</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">سبد خرید من</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">تخفیف‌ ها </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">ارتباط با ما</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">مقایسه کردن</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">تسویه حساب</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">جستجو کردن</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">لیست علاقه‌ مندی‌ ها</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#sellerMenu">عرضه‌ کننده</a>

                  <div className="collapse" id="sellerMenu">
                    <ul className="nav flex-column ms-3">
                      <li className="nav-item">
                        <a className="nav-link" href="#">ثبت ‌نام به عنوان فروشنده</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">نمایندگی‌ های فروشندگان</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">مشخصات فروشگاه</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <Image src="/logo.png" width="20" height="20" layout="responsive" className="logo-icon" alt="logo"></Image>

          <div>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#signupModal">
              <Image src="/search.svg" width="20" height="20" layout="responsive" className="h-auto user-svg" alt="avator"></Image>
            </button>

            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered d-flex justify-content-center logo-inner">
                <div className="modal-content">
                  <div className="modal-header flex-column">
                    <h3 className="mb-4 modal-title" id="signupModalLabel">ورود به حساب</h3>

                    <p className="text-center logo-p">با یک ورود ساده به دنیای خود بازگردید. ماجراجویی بعدی شما در انتظار است : بیایید شروع کنیم!</p>
                  </div>

                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label color-7">نام کاربری</label>

                        <input type="text" className="form-control" id="username" required />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className="form-label color-7">رمز عبور</label>

                        <input type="password" className="form-control" id="password" required />
                      </div>

                      <button type="submit" className="btn btn-success btn-creamy w-100">ورود به حساب</button>
                    </form>

                    <div className="text-center logo-or color-7">یا</div>

                    <p className="text-center fw-semibold logo-sign-in color-7">
                      هنوز ثبت‌ نام نکرده‌اید؟

                      <a href="#" className="logo-login fw-semibold ms-2">همین حالا ثبت‌ نام کنید</a>
                    </p>

                    <button type="text" className="btn btn-success btn-brown w-100">با شماره موبایل وارد شوید</button>
                  </div>
                </div>

                <Image src="/auth.jpeg" width="570" height="630" layout="responsive" className="auth-img" alt="auth-img"></Image>
              </div>
            </div>

            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#signupModal">
              <Image src="/heart.svg" width="20" height="20" layout="responsive" className="h-auto user-svg" alt="avator"></Image>
            </button>

            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered d-flex justify-content-center logo-inner">
                <div className="modal-content">
                  <div className="modal-header flex-column">
                    <h3 className="mb-4 modal-title" id="signupModalLabel">ورود به حساب</h3>

                    <p className="text-center logo-p">با یک ورود ساده به دنیای خود بازگردید. ماجراجویی بعدی شما در انتظار است : بیایید شروع کنیم!</p>
                  </div>

                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label color-7">نام کاربری</label>

                        <input type="text" className="form-control" id="username" required />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className="form-label color-7">رمز عبور</label>

                        <input type="password" className="form-control" id="password" required />
                      </div>

                      <button type="submit" className="btn btn-success btn-creamy w-100">ورود به حساب</button>
                    </form>

                    <div className="text-center logo-or color-7">یا</div>

                    <p className="text-center fw-semibold logo-sign-in color-7">
                      هنوز ثبت‌ نام نکرده‌اید؟

                      <a href="#" className="logo-login fw-semibold ms-2">همین حالا ثبت‌ نام کنید</a>
                    </p>

                    <button type="text" className="btn btn-success btn-brown w-100">با شماره موبایل وارد شوید</button>
                  </div>
                </div>

                <Image src="/auth.jpeg" width="570" height="630" layout="responsive" className="auth-img" alt="auth-img"></Image>
              </div>
            </div>

            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <Image src="/shop.svg" width="20" height="20" layout="responsive" className="h-auto user-svg" alt="avator"></Image>
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">سبد خرید من (۰)</h5>
              </div>

              <div className="offcanvas-body d-flex flex-column justify-content-start align-items-center">
                <div className="offcanvas-body-div">
                  <svg className="logo-user logo-shop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </div>

                <h5 className="fw-normal offcanvas-body-h5">سبد خرید شما در حال حاضر خالی است.</h5>
              </div>
            </div>

            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#signupModal">
              <Image src="/avator.svg" width="20" height="20" layout="responsive" className="h-auto user-svg" alt="avator"></Image>
            </button>

            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered d-flex justify-content-center logo-inner">
                <div className="modal-content">
                  <div className="modal-header flex-column">
                    <h3 className="mb-4 modal-title" id="signupModalLabel">ورود به حساب</h3>

                    <p className="text-center logo-p">با یک ورود ساده به دنیای خود بازگردید. ماجراجویی بعدی شما در انتظار است : بیایید شروع کنیم!</p>
                  </div>

                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label color-7">نام کاربری</label>

                        <input type="text" className="form-control" id="username" required />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className="form-label color-7">رمز عبور</label>

                        <input type="password" className="form-control" id="password" required />
                      </div>

                      <button type="submit" className="btn btn-success btn-creamy w-100">ورود به حساب</button>
                    </form>

                    <div className="text-center logo-or color-7">یا</div>

                    <p className="text-center fw-semibold logo-sign-in color-7">
                      هنوز ثبت‌ نام نکرده‌اید؟

                      <a href="#" className="logo-login fw-semibold ms-2">همین حالا ثبت‌ نام کنید</a>
                    </p>

                    <button type="text" className="btn btn-success btn-brown w-100">با شماره موبایل وارد شوید</button>
                  </div>
                </div>

                <Image src="/auth.jpeg" width="570" height="630" layout="responsive" className="auth-img" alt="auth-img"></Image>
              </div>
            </div>
          </div>
        </section>

        {/* Furniture Img 5 */}

        <Image src="/furniture-5.png" width="1920" height="647" layout="responsive" alt="furniture-5" ></Image>

        {/* X3 Img */}ّ

        <section className="row x3-img">
          <div className="col-6 col-md-4 x3-img-inner">
            <Image src="/furniture-2.png" width="612" height="277" layout="responsive" alt="furniture-2"></Image>
          </div>

          <div className="col-6 col-md-4 x3-img-inner">
            <Image src="/furniture-3.jpg" width="612" height="277" layout="responsive" alt="furniture-3"></Image>
          </div>

          <div className="col-6 col-md-4 x3-img-inner">
            <Image src="/furniture-4.png" width="612" height="277" layout="responsive" alt="furniture-4"></Image>
          </div>
        </section>

        {/* Special Product */}ّ

        <section className="container special-product">
          <h4 className="d-flex justify-content-center fw-normal mt-0 special-product-h4">محصولات انحصاری</h4>

          <h2 className="d-flex justify-content-center fw-bold position-relative special-product-h2">محصولات ویژه</h2>
        </section>

        {/* Special Product Item */}

        <section className="container special-product-item">
          <div className="container special-product-item-inner">
            <ul className="d-inline-flex justify-content-center text-center align-items-center container p-0 special-product-item-ul">
              <li className="special-product-item-li">
                <a href="#" className="container special-product-item-a">
                  مبلمان کلاسیک
                </a>
              </li>

              <li className="special-product-item-li">
                <a href="#" className="container special-product-item-a">
                  مبل‌ های دیگر
                </a>
              </li>
            </ul>

            <div className="container special-product-item-div">
              <div className="col-3 special-product-item-div-inner-box">
                <Image src="/1.jpg" width="326" height="380" layout="responsive" alt="img-1"></Image>

                <div className="special-product-detail">
                  <a href="#" className="fw-medium special-product-detail-a">
                    ماوس جادویی
                  </a>

                  <div>
                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>
                  </div>

                  <h4 className="d-flex flex-column justify-content-between special-font-size">
                    ۱,۷۷۳,۰۰۰ تومان
                    <del className="d-flex justify-content-center align-items-center last-price-box">۱,۸۰۰,۰۰۰</del>
                    <div className="d-flex justify-content-center align-items-center percent-box">۱٪ تخفیف</div>
                  </h4>
                </div>
              </div>

              <div className="col-3 special-product-item-div-inner-box">
                <Image src="/2.jpg" width="326" height="380" layout="responsive" alt="img-1"></Image>

                <div className="special-product-detail">
                  <a href="#" className="fw-medium special-product-detail-a">
                    جاسوئیچی SparkLite
                  </a>

                  <div>
                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>
                  </div>

                  <h4 className="d-flex flex-column justify-content-between special-font-size">
                    ۱,۷۷۳,۰۰۰ تومان
                    <del className="d-flex justify-content-center align-items-center last-price-box">۱,۸۰۰,۰۰۰</del>
                    <div className="d-flex justify-content-center align-items-center percent-box">۱٪ تخفیف</div>
                  </h4>
                </div>
              </div>

              <div className="col-3 special-product-item-div-inner-box">
                <Image src="/3.jpg" width="326" height="380" layout="responsive" alt="img-1"></Image>

                <div className="special-product-detail">
                  <a href="#" className="fw-medium special-product-detail-a">
                    اسپیکر Sonos
                  </a>

                  <div>
                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>
                  </div>

                  <h4 className="d-flex flex-column justify-content-between special-font-size">
                    ۱,۷۷۳,۰۰۰ تومان
                    <del className="d-flex justify-content-center align-items-center last-price-box">۱,۸۰۰,۰۰۰</del>
                    <div className="d-flex justify-content-center align-items-center percent-box">۱٪ تخفیف</div>
                  </h4>
                </div>
              </div>

              <div className="col-3 special-product-item-div-inner-box">
                <Image src="/4.png" width="326" height="380" layout="responsive" alt="img-1"></Image>

                <div className="special-product-detail">
                  <a href="#" className="fw-medium special-product-detail-a">
                    میز تلویزیون Eldora
                  </a>

                  <div>
                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>

                    <Image src="/star.svg" width="18" height="18" alt="star"></Image>
                  </div>

                  <h4 className="d-flex flex-column justify-content-between special-font-size">
                    ۱,۷۷۳,۰۰۰ تومان
                    <del className="d-flex justify-content-center align-items-center last-price-box">۱,۸۰۰,۰۰۰</del>
                    <div className="d-flex justify-content-center align-items-center percent-box">۱٪ تخفیف</div>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Furniture Img */}

        <Image src="/furniture.png" width="1920" height="637" layout="responsive" alt="furniture" className="furniture-img"></Image>

        {/* Latest Blog */}ّ

        <section className="container special-product">
          <h4 className="d-flex justify-content-center fw-normal mt-0 special-product-h4">داستان های اخیر</h4>

          <h2 className="d-flex justify-content-center fw-bold position-relative special-product-h2">وبلاگ های اخیر</h2>
        </section>

        {/* Blog Item */}ّ

        <section className="container row mx-auto blog-item">
          <div className="d-flex flex-column col-6 col-md-4 h-auto blog-item-inner">
            <Image src="/blog-item-1.png" width="440" height="295" layout="responsive" alt="blog-1" className="blog-item-img"></Image>

            <div className="blog-item-div">
              <h4 className="text-center fw-normal blog-item-time">اردیبهشت ۱۴۰۴ ساعت ۱۰:۴۸</h4>

              <a href="#" className="text-center blog-item-a">
                <p className="fw-bold">فضای زندگی خود را متحول کنید: هنر چیدمان زیبا</p>
              </a>

              <hr className="mx-auto opacity-100 blog-item-hr" />

              <h6 className="text-center fw-normal mb-0 blog-item-admin">از طرف ادمین</h6>
            </div>
          </div>

          <div className="d-flex flex-column col-6 col-md-4 h-auto blog-item-inner">
            <Image src="/blog-item-2.png" width="440" height="295" layout="responsive" alt="blog-1" className="blog-item-img"></Image>

            <div className="blog-item-div">
              <h4 className="text-center fw-normal blog-item-time">اردیبهشت ۱۴۰۳ ساعت ۰۷:۴۳</h4>

              <a href="#" className="text-center blog-item-a">
                <p className="fw-bold">زیبایی در هر زاویه: استادی در هارمونی دکوراسیون</p>
              </a>

              <hr className="mx-auto opacity-100 blog-item-hr" />

              <h6 className="text-center fw-normal mb-0 blog-item-admin">از طرف ادمین</h6>
            </div>
          </div>

          <div className="d-flex flex-column col-6 col-md-4 h-auto blog-item-inner">
            <Image src="/blog-item-3.png" width="440" height="295" layout="responsive" alt="blog-1" className="blog-item-img"></Image>

            <div className="blog-item-div">
              <h4 className="text-center fw-normal blog-item-time">اردیبهشت ۱۴۰۱ ساعت ۱۵:۳۲</h4>

              <a href="#" className="text-center blog-item-a">
                <p className="fw-bold">کوچک اما شیک: پیشنهادهای مبلمان برای فضاهای محدود</p>
              </a>

              <hr className="mx-auto opacity-100 blog-item-hr" />

              <h6 className="text-center fw-normal mb-0 blog-item-admin">از طرف ادمین</h6>
            </div>
          </div>
        </section>

        {/* Brand Item */}

        <section className="container d-flex brand-item">
          <div className="h-auto brand-item-box">
            <a href="#" className="d-flex align-items-center justify-content-center mx-auto brand-item-a">
              <Image src="/brand-1.png" width="121" height="60" layout="responsive" alt="brand-item-1" className="brand-item-img"></Image>
            </a>
          </div>

          <div className="h-auto brand-item-box">
            <a href="#" className="d-flex align-items-center justify-content-center mx-auto brand-item-a">
              <Image src="/brand-2.png" width="121" height="60" layout="responsive" alt="brand-item-2" className="brand-item-img"></Image>
            </a>
          </div>

          <div className="h-auto brand-item-box">
            <a href="#" className="d-flex align-items-center justify-content-center mx-auto brand-item-a">
              <Image src="/brand-3.png" width="121" height="60" layout="responsive" alt="brand-item-3" className="brand-item-img"></Image>
            </a>
          </div>

          <div className="h-auto brand-item-box">
            <a href="#" className="d-flex align-items-center justify-content-center mx-auto brand-item-a">
              <Image src="/brand-4.png" width="121" height="60" layout="responsive" alt="brand-item-4" className="brand-item-img"></Image>
            </a>
          </div>

          <div className="h-auto brand-item-box">
            <a href="#" className="d-flex align-items-center justify-content-center mx-auto brand-item-a">
              <Image src="/brand-5.png" width="121" height="60" layout="responsive" alt="brand-item-5" className="brand-item-img"></Image>
            </a>
          </div>
        </section>

        {/* Enter Email */}

        <section className="enter-email">
          <div className="container enter-email-inner">
            <div className="row enter-email-row">
              <div className="col-lg-6 border-middle">
                <h4 className="enter-email-h4">قبل از همه مطلع شو</h4>

                <p className="mb-0 enter-email-p">با ثبت‌ نام در خبرنامه همیشه از جدید ترین محصولات فروشگاه با خبر باشید</p>
              </div>

              <div className="col-lg-6">
                <form className="d-flex justify-content-end align-items-center h-100">
                  <div className="h-100 mx-3 enter-email-div">
                    <input type="email" className="w-100 h-100 border-0 enter-email-input" placeholder="ایمیل خود را وارد کنید"></input>
                  </div>

                  <button className="fw-bold enter-email-button">ثبت‌ نام</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}

        <footer className="w-100 h-auto">
          <div className="container h-100 footer-inner">
            <div className="row h-100">
              <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
                <Image src="/logo.png" width="180" height="35" layout="responsive" alt="logo" className="mb-5 footer-logo"></Image>

                <p className="footer-p">جدید ترین ترند ها را کشف کنید و از خریدی روان با مجموعه‌ های انحصاری ما لذت ببرید.</p>

                <ul className="d-flex p-0 mt-5">
                  <li className="footer-li-svg">
                    <svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                      <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                  </li>

                  <li className="footer-li-svg">
                    <svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </li>

                  <li className="footer-li-svg">
                    <svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                    </svg>
                  </li>

                  <li className="footer-li-svg">
                    <svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </li>
                </ul>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-4 col-md-6 mt-4">
                <div>
                  <h4 className="fw-semibold mb-3 footer-title">دسته‌ بندی‌</h4>
                </div>

                <div>
                  <ul className="p-0 m-0">
                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        لوازم ضروری نوزاد
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        نمایشگاه کیف
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        کتاب ها
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        کریسمس
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        دکوراسیون کلاسیک
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        عینک‌ هایی با وضوح بالا
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl col-lg-2 col-md-3 mt-4">
                <div>
                  <h4 className="fw-semibold mb-3 footer-title">لینک‌ های کاربردی</h4>
                </div>

                <div>
                  <ul className="p-0 m-0">
                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        کتاب ها
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        کلکسیون‌ ها
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        درباره ما
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        وبلاگ ما
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        تخفیف های ویژه
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        جستجو محصولات
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-md-3 mt-4">
                <div>
                  <h4 className="fw-semibold mb-3 footer-title">مرکز پشتیبانی</h4>
                </div>

                <div>
                  <ul className="p-0 m-0">
                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        حساب کاربری من
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        لیست سفارش‌ های من
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        لیست مورد علاقه ها
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        سوالات متداول
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        تماس با ما
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
                <div>
                  <h4 className="fw-semibold mb-3 footer-title">اطلاعات فروشگاه</h4>
                </div>

                <div>
                  <ul className="p-0 m-0">
                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        فروشگاه مولتی‌ کارت ایران
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        با ما تماس بگیرید : ۰۹۱۹۱۵۰۱۲۹۳
                      </a>
                    </li>

                    <li className="position-relative pt-3 footer-li">
                      <a href="#" className="position-relative footer-a">
                        به ما ایمیل بزنید : sina247re@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Powered By */}

        <section className="container powered-by">
          <div className="row powered-by">
            <div className="col-xl-6 col-md-6 col-sm-12 d-flex align-items-center">
              <p className="mb-0 color-7">ساخته‌ شده در تم‌ فارست و قدرت گرفته از پیکسل‌ استرپ</p>
            </div>

            <div className="col-xl-6 col-md-6 col-sm-12 d-flex justify-content-end align-items-center">
              <div className="h-100 d-flex align-items-center justify-content-end">
                <Image src="/payment.png" width="273" height="30" alt="payment"></Image>
              </div>
            </div>
          </div>
        </section>

        {/* Go Top */}

        <section className="d-flex text-center align-items-center justify-content-center position-fixed go-top">
          <a href="#">
            <Image src="/arrow.svg" width="25" height="25" alt="arrow"></Image>
          </a>
        </section>
      </body >
    </html >
  );
}
