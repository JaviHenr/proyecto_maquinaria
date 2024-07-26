import { Form, Formik, Field } from 'formik';
import { useReservas } from '../context/ReservaMaquinariaProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ReservaMaquinariaForm() {

    const { createReservas, getReserva, updateReserva } = useReservas();

    const [reserva, setReserva] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadReserva = async () => {
            if (params.ID_RESERVA_MAQUINARIA) {
                try {
                    const response = await getReserva(params.ID_RESERVA_MAQUINARIA);
                    setReserva(response.data);
                } catch (error) {
                    console.error('Error al cargar la reserva:', error);
                }
            }
        };
        loadReserva();
    }, [params.ID_RESERVA_MAQUINARIA]);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            if (params.ID_RESERVA_MAQUINARIA) {
                await updateReserva(params.ID_RESERVA_MAQUINARIA, values);
            } else {
                await createReservas(values);
            }
            navigate('/reservas');
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{
                ID_RESERVA_MAQUINARIA: '',
                ID_ACTIVO_M: '',
                RUT_CLIENTE: '',
                FECHA_USO_MAQUINARIA: '',
                HORA_LLEGADA_USO_MAQUINARIA: '',
                DESCRIPCION_USO_MAQUINARIA: '',
                HORA_SALIDA_USO_MAQUINARIA: '',
            }}
            enableReinitialize={true}
            onSubmit={async (values) => {
                console.log(values);
                if(params.ID_RESERVA_MAQUINARIA){
                    await updateReserva(params.ID_RESERVA_MAQUINARIA, values);
                } else {
                    await createReservas(values);
                }
                navigate('/');
                setReserva({
                    ID_ACTIVO_M: '',
                    RUT_CLIENTE: '',
                    FECHA_USO_MAQUINARIA: '',
                    HORA_LLEGADA_USO_MAQUINARIA: '',
                    DESCRIPCION_USO_MAQUINARIA: '',
                    HORA_SALIDA_USO_MAQUINARIA: '',
                });
                console.log(values);
            }}
        >
            {({handleChange, handleSubmit, values, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
                <h1 className="text-xl font-bold uppercase text-center">
                    {params.ID_RESERVA_MAQUINARIA ? "Editar Reserva" : "Nueva Reserva"}
                    </h1>

                <label className="block">Fecha Reserva</label>
                <Field
                    type="text"
                    name="FECHA_USO_MAQUINARIA"
                    placeholder="Fecha Reserva"
                    className="px-2 py-1 rounded-sm w-full"
                    onChange={handleChange}
                    value={values.FECHA_USO_MAQUINARIA}
                />

                <label className="block">Hora Llegada</label>
                <Field
                    type="text"
                    name="HORA_LLEGADA_USO_MAQUINARIA"
                    placeholder="Hora Llegada"
                    className="px-2 py-1 rounded-sm w-full"
                    onChange={handleChange}
                    value={values.HORA_LLEGADA_USO_MAQUINARIA}
                />

                <label className="block">Hora Salida</label>
                <Field
                    type="text"
                    name="HORA_SALIDA_USO_MAQUINARIA"
                    placeholder="Hora Salida"
                    className="px-2 py-1 rounded-sm w-full"
                    onChange={handleChange}
                    value={values.HORA_SALIDA_USO_MAQUINARIA}
                />

                <label className="block">Descripcion</label>
                <Field
                    name="DESCRIPCION_USO_MAQUINARIA"
                    placeholder="Descripcion"
                    className="px-2 py-1 rounded-sm w-full"
                    onChange={handleChange}
                    value={values.DESCRIPCION_USO_MAQUINARIA}
                />

                <label className="block">Rut Cliente</label>
                <Field
                    name="RUT_CLIENTE"
                    placeholder="Rut Cliente"
                    className="px-2 py-1 rounded-sm w-full"
                    onChange={handleChange}
                    value={values.RUT_CLIENTE}
                />

                <label className="block">ID Maquinaria</label>
                <Field
                    name="ID_ACTIVO_M"
                    placeholder="ID Maquinaria"
                    className="px-2 py-1 rounded-sm w-full"
                    onChange={handleChange}
                    value={values.ID_ACTIVO_M}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
                >
                {isSubmitting ? "Saving..." : "Save"}
                </button>
                
            </Form>
            )}
        </Formik>
    );

}

export default ReservaMaquinariaForm;