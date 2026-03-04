"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function White() {
  return (
    <div className="min-h-svh w-full bg-black text-white relative overflow-x-hidden overflow-y-auto">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Red accent line (top) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent pointer-events-none" />

      {/* Success Banner (green) */}
      <div className="relative z-10 w-full bg-green-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium">
          <div className="text-sm font-semibold text-center">
            Your purchase has been completed successfully!
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl gap-6 px-5 py-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-600/5 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-5 text-base font-medium text-gray-300 leading-relaxed">
            <span className="text-2xl font-semibold text-center text-white block">🎁 Welcome! 🎁</span>
            <p>Your access has already been released!</p>
            <p>
              The next step is to <u className="text-green-400">access the inbox</u> of your email used for the purchase.
            </p>
            <p>
              You will receive an email with the title: <br />
              <strong className="text-white">&quot;Your access has been released&quot;</strong>.
            </p>
            <p>Don&apos;t forget to check your spam or junk folder, some emails may end up there by error.</p>
            <p>
              If you have any questions or difficulties accessing, <u className="text-green-400">send an email to our support</u>:
            </p>
            <p>
              — <strong className="text-green-400 hover:underline"><Link href="mailto:ayuda@ayudarewards.com">ayuda@ayudarewards.com</Link></strong>
            </p>
            <p>We will respond immediately and help you with everything you need.</p>
            <p className="text-white">A strong hug, see you on the platform to start studying!</p>
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-green-500/60 text-sm text-center mt-4 p-6 bg-green-950/40 text-gray-300">
              <p>If you want to access your members area directly, click the link below.</p>
              <p>But don&apos;t forget to check your email inbox to <u className="text-green-400">find your email and password</u>.</p>
              <Link
                href="https://you-rewards.memberkit.com.br/"
                className="bg-green-600 hover:bg-green-700 text-white text-sm text-center font-extrabold rounded-lg mt-3 p-3 transition-colors"
              >
                ✅ Click here to access the members area now!
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center my-6"
        >
        </motion.div>
      </div>
    </div>
  );
}
