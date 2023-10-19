import ProjectSwiper from '@/components/ProjectSwiper'
import style from './project.module.css'

const Page = async ({ params }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url(/images/bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '.3',
          position: 'fixed',
          inset: '0',
          zIndex: '0'
        }}
      ></div>

      <section className={style.container}>
        <article className={style.information}>
          <h3>Proyecto creado por {'nombre del usuario'}</h3>
          <h4>Descriccion</h4>
          <div className={style.descriptionContainer}>
            <p className={style.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop fette.
            </p>
          </div>

          <div className={style.moreInfo}>
            <p>
              Categoria: <span>{'categoria'}</span>
            </p>
            <button>Hechale un vistazo al portafolio de {'usuario'}</button>
          </div>
        </article>

        <article className={style.imgContainer}>
          <ProjectSwiper
            images={[{ url: '/images/bg.png' }, { url: '/images/bg.png' }]}
          />

          <div className={style.intemsDemo}>
            <span>★★★★★</span>
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
