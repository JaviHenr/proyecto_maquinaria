import { Form, Formik, Field } from 'formik';
import { useMaquinarias } from '../context/MaquinariaProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MaquinariaForm() {

  const { createMaquinaria, getMaquinaria, updateMaquinaria } = useMaquinarias();

  const [maquinaria, setMaquinaria] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadMaquinaria = async () => {
      if (params.ID_ACTIVO_M) {
        try {
          const response = await getMaquinaria(params.ID_ACTIVO_M);
          setMaquinaria(response.data);
        } catch (error) {
          console.error('Error al cargar la maquinaria:', error);
        }
      }
    };
    loadMaquinaria();
  }, [params.ID_ACTIVO_M]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (params.ID_ACTIVO_M) {
        await updateMaquinaria(params.ID_ACTIVO_M, values);
      } else {
        await createMaquinaria(values);
      }
      navigate('/maquinarias');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setSubmitting(false);
    }
  };
 
  return (
    <Formik
      initialValues={{
        ID_ACTIVO_M: '',
        NOMBRE: '',
        NUM_INVENTARIO: '',
        ESTATUS: '',
        COMPONENTES: '',
        CATEGORIA: '',
        MARCA: '',
        MODELO: '',
        NUM_SERIE: '',
        CENTRO_DE_COSTO: '',
        UBICACION: '',
      }}
      oenableReinitialize={true}
      onSubmit={async (values) => {
          console.log(values);
          if(params.ID_ACTIVO_M) {
              await updateMaquinaria(params.ID_ACTIVO_M, values);
              navigate('/');
          } else {
              await createMaquinaria(values);
          }
          navigate("/");
          setMaquinaria({
              NOMBRE: '',
              NUM_INVENTARIO: '',
              ESTATUS: '',
              COMPONENTES: '',
              CATEGORIA: '',
              MARCA: '',
              MODELO: '',
              NUM_SERIE: '',
              CENTRO_DE_COSTO: '',
              UBICACION: '',
          }); 
          console.log(values);
      }}
    >
      {({handleChange, handleSubmit, values, isSubmitting}) => (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-xl font-bold uppercase text-center">
                      {params.ID_ACTIVO_M ? "Editar Maquinaria" : "Nueva Maquinaria"}
                    </h1>
          <label className="block">Nombre Maquinaria</label>
          <Field
            type="text"
            name="NOMBRE"
            placeholder="Escribir Nombre de la maquinaria"
            className="px-2 py-1 rounded-sm w-full"
            onChange={handleChange}
            value={values.NOMBRE}
          />

          <label className="block">Numero de inventario</label>
          <Field
            name="NUM_INVENTARIO"
            type="text"
            placeholder="Escribir el número de inventario"
            onChange={handleChange}
            className="px-2 py-1 rounded-sm w-full"
            value={values.NUM_INVENTARIO}
          />

          <label className="block">Estado</label>
          <Field
            name="ESTATUS"
            placeholder="Escribir el estado de la maquinaria"
            onChange={handleChange}
            className="px-2 py-1 rounded-sm w-full"
            value={values.ESTATUS}
          />

          <label className="block">Componentes</label>
          <Field
            name="COMPONENTES"
            placeholder="Escribir los componentes de la maquinaria"
            onChange={handleChange}
            className="px-2 py-1 rounded-sm w-full"
            value={values.COMPONENTES}
          />

          <label className="block">Categoría</label>
          <Field
            name="CATEGORIA"
            placeholder="Escribir la categoría de la maquinaria"
            onChange={handleChange}
            className="px-2 py-1 rounded-sm w-full"
            value={values.CATEGORIA}
          />

          <label className="block">Marca</label>
          <Field
            name="MARCA"
            placeholder="Escribir la marca de la maquinaria"
            onChange={handleChange}
            className="px-2 py-1 rounded-sm w-full"
            value={values.MARCA}
          />

          <label className="block">Modelo</label>
          <Field
            name="MODELO"
            placeholder="Escribir el modelo de la maquinaria"
            onChange={handleChange}
            className="px-2 py-1 rounded-sm w-full"
            value={values.MODELO}
          />

          <label className="block">Número de Serie</label>
          <Field
            name="NUM_SERIE"
            placeholder="Escribir el número de serie de la maquinaria"
            onChange={handleChange}
            className="px-2 py-1 rounded-sm w-full"
            value={values.NUM_SERIE}
          />

          <label className="block">Centro de Costo</label>
          <Field
            name="CENTRO_DE_COSTO"
            placeholder="Escribir el centro de costo de la maquinaria"
            onChange={handleChange}
            className="px-2 py-1 rounded-sm w-full"
            value={values.CENTRO_DE_COSTO}
          />

          <label className="block">Ubicación</label>
          <Field
            name="UBICACION"
            placeholder="Escribir la ubicación de la maquinaria"
            onChange={handleChange}
            className="px-2 py-1 rounded-sm w-full"
            value={values.UBICACION}
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
export default MaquinariaForm;