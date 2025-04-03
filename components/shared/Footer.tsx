"use client"
import { APP_NAME } from "@/lib/constatnts";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mount,setMount] =useState(false)
  useEffect(() => {
    setMount(true)
  },[])
  
  
  if(!mount) return null
  
  const currentYear = new Date().getFullYear();

  return <footer className="border-t">
    <div className="p-5 flex-center">
      {currentYear} {APP_NAME} all rights reserved
    </div>
    
  </footer>;
}
