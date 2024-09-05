import Link from "next/link"

const NotFound = () => {
  return (
    <div className="not-found-page pt-[70px]">
        <div className="container text-center">
            <div className="py-24">
                <h2 className="custom-h2-font text-red-500">Page Not Found!</h2>
                <p>Could not find requested resource </p>
                <Link href="/" className="underline text-gray-500 text-lg">Return Home</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound