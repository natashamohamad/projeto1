"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";
import Progress from "@/components/progress";
import HotmartUpsell from "@/components/hotmart-upsell";

export default function White() {
  const benefits = [
    "Permanent Entry: All current modules and every future update at no extra cost.",
    "Priority Support: Ongoing access to our community and mentorship updates.",
    "Inflation Proof: Lock in today's price and protect yourself from future subscription hikes."
  ];

  return (
    <div className="min-h-svh w-full bg-black text-white relative overflow-x-hidden overflow-y-auto">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Red accent line (top) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent pointer-events-none" />

      {/* Warning Banner */}
      <div className="relative z-10 w-full bg-red-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium">
          <div className="text-sm font-semibold text-center">
            Please do not close or refresh this page, we have a limited time offer!
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl gap-8 px-5 py-8 mx-auto">
        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3 text-center w-full"
        >
          <span className="text-sm italic text-gray-400">We are processing your fee payment…</span>
          <Progress progress={68} />
        </motion.div>

        {/* Upsell Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black p-6 md:p-8 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/5 to-transparent" />

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/50 bg-red-600/10 backdrop-blur-sm"
                >
                  <Zap className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-red-400">EXCLUSIVE ONE-TIME OFFER</span>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-black">
                  <span className="bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
                    Lifetime Access
                  </span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  Stop worrying about monthly bills forever.
                </p>
              </div>

              {/* Main Offer Text */}
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Upgrade to <span className="text-red-500 font-semibold">Faceless Channels - Lifetime Access</span> right now and eliminate all recurring fees. For a single, one-time investment, you unlock:
                </p>

                {/* Benefits List */}
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-red-600/50 transition-all duration-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{benefit}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg font-medium text-white pt-2">
                  Secure your spot for life and focus entirely on your growth.
                </p>
              </div>

              {/* Hotmart Upsell Component */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <HotmartUpsell black={false} />
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-gray-800"
              >
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-red-500" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4 text-red-500" />
                  <span>One-Time Investment</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
