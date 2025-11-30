import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/")
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="w-full h-screen flex justify-center items-center text-2xl font-semibold">Page you are looking for is not found..</div>
    )
}

export default NotFound