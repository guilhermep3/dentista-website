"use client"

import dynamic from "next/dynamic"
import React from "react"

const ScrollRevealWrapper = dynamic(() => import("@/utils/scrollRevealWrapper"), {
   ssr: false
})

export default function ClientScrollReveal({children}: any) {
   return <ScrollRevealWrapper>{children}</ScrollRevealWrapper>
}