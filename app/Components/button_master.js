export default function MainButton({ title, url, alt = "" }) {
    return (
      <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href={url}
          alt={alt}
          rel="noopener noreferrer"
        >
          {title}
      </a>
    )
  }