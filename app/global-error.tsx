'use client'
 
import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <html>
      <body>
        <div className="flex h-screen flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">Something went wrong!</h2>
          <Button
            onClick={reset}
            className="bg-[#0066FF] hover:bg-blue-600 text-white"
          >
            Try again
          </Button>
        </div>
      </body>
    </html>
  )
}
