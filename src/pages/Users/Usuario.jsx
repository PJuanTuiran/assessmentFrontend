function Usuario() {
    const [getUsers, setgetUsers] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)
    const [open, setOpen] = useState(false)


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/')
                const data = await response.json()
                setgetUsers(data)
                setloading(false)
            } catch (error) {
                seterror(error)
                setloading(false)
            }
        }
        fetchUsers()
    }, [])

    const handleOpenCreateModal = () => {
        setOpen(true)
    }
    const handleCloseCreateModal = () => {
        setOpen(false)
    }
  return (
    <div>Usuario</div>
  )
}
export default Usuario