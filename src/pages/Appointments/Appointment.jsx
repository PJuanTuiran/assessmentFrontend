import axios from "axios"

function Citas() {

    const [citas, setcitas] = useState(null)
    const [loading, setloading] = useState(true)
    const [showAler, setShowAlert] = useState({ show: false, message: '', type: '' })
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const fetchCitas = async () => {
            try {
                const response = await axios('http://localhost:3001/citas')
                setcitas(response.data)
                setloading(false)
            } catch (error) {
                seterror(error)
                setloading(false)
            }
        }
        fetchCitas()
    }, [])

    const handleOpenCreateModal = () => {
        setOpen(true)
    }
    const handleCloseCreateModal = () => {
        setOpen(false)
    }
  return (
    <div>Citas</div>
  )
}
export default Citas