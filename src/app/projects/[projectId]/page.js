import ProjectSwiper from '@/components/ProjectSwiper'
import style from './project.module.css'
import { PROJECTS } from '@/template'

// solo es para simular alguna data por ahora
const getProject = async (id) => {
  const project = PROJECTS.find(ele => ele.id === id)
  return project
}

const Page = async ({ params }) => {
  const data = await getProject(params.projectId)

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${data?.images[0].url})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '.2',
          position: 'fixed',
          inset: '0',
          zIndex: '0',
          filter: 'blur(5px)'

        }}
      ></div>

      <section className={style.container}>
        <article className={style.information}>
          <h3>Proyecto creado por {data.author}</h3>
          <h4>Descriccion</h4>
          <div className={style.descriptionContainer}>
            <p className={style.description}>
              {data.description}
            </p>
          </div>

          <div className={style.moreInfo}>
            <p className={style.categories}>
              Categoria: {
                data.categories?.map(c => {
                  return <span key={data.id}>{c}</span>
                })
              }
            </p>
            <button>Hechale un vistazo al portafolio de {'usuario'}</button>
          </div>
        </article>

        <article className={style.imgContainer}>
          <ProjectSwiper
            images={data.images}
          />

          <div className={style.intemsDemo}>
            <span>{data.rating}</span>
            <button>Ver Demo</button>
            <span>Fecha de creacion: 23/10/22</span>
            <span>Fecha de actualizacion: 23/10/22</span>
          </div>
        </article>
      </section>
    </>
  )
}

export default Page
