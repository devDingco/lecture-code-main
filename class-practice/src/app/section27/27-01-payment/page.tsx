"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { v4 } from "uuid";

export default function PaymentPage() {
  const onClickPayment = async () => {
    const response = await PortOne.requestPayment({
      // Store ID 설정
      storeId: "store-ab9af2e4-ecac-4124-9d63-549cd9b5c2f6",
      // 채널 키 설정
      channelKey: "channel-key-d733c422-895c-4033-9f03-24da42d1a098",
      paymentId: `payment-${v4()}`,
      orderName: "마우스",
      totalAmount: 3000,
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",
      customer: {
        fullName: "철수",
        phoneNumber: "010-1234-5678",
        email: "a@a.com",
        address: {
          country: "COUNTRY_KR",
          addressLine1: "서울시 ....",
          addressLine2: "3층",
        },
        zipcode: "1111",
      },
      redirectUrl: "http://localhost:3000/결제후돌아올영수증페이지", // 모바일결제시, 결제 후 다시 돌아올 내 홈페이지 주소
    });
    console.log(response);

    // 백엔드에 저장하기 => 숙제API에서 사용(주의: notion수업자료에 있는 storeId, channelKey로 변경하기) => 실제백엔드에서 결제상태를 검증하기 때문
    // 스토어ID: store-abc39db7-8ee1-4898-919e-0af603a68317
    // 채널키: channel-key-1dc10cea-ec89-471d-aedf-f4bd68993f33 (카카오페이)

    // createPointTransactionOfLoading(paymentId: ...)
  };

  return <button onClick={onClickPayment}>결제하기</button>;
}
