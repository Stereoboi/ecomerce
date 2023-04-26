"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import done from "../../public/done.webp";
import Link from "next/link";
import { useCartStore } from "@/store";
import { useEffect } from "react";

const OrderConfirmed = () => {
  const cartStore = useCartStore();
  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCard();
  }, []);
  const handleCheckoutOrder = () => {
    setTimeout(() => {
      cartStore.setCheckout("cart");
    }, 1000);
    cartStore.toggleCart();
  };
  return (
    <motion.div
      className="flex items-center justify-center my-12"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="p-12 rounded-md text-center">
        <h1 className="text-2xl font-medium">Your order has been placed</h1>
        <h2 className="text-sm my-4">Chack your email for the receipt</h2>
        <Image src={done} alt="done" className="py-8" />
        <div className="flex items-center justify-center gap-12">
          <Link href={"/dashboard"}>
            <button onClick={handleCheckoutOrder} className="font-medium">
              Check your order
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderConfirmed;
