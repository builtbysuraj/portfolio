export default function IconLink({ link, title, icon }) {
  return (
    <a href={link} target={'_blank'} rel='noopener noreferrer'>
      <i className={icon} /> {title}
    </a>
  )
}
