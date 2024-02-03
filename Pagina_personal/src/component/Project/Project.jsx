import './Project.styles.scss'

const Project = ({data}) => {
  return (
    <>
      {data.map((item) => (
        <p className='project'>{item}</p>
      ))}
    </>
  )
}

export default Project