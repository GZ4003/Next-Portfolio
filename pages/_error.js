import Layout from "../components/layaout";

const _error = ({statusCode}) => {
    return(
        <Layout>
            {
                statusCode ? (
                    <p className="text-center">No se pudo cargar la pagina</p>
                ): (
                    <p>No se pudo obterner la pagina</p>
                )
            }
            
        </Layout>
    )
}

export default _error