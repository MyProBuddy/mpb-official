import Social from "@/components/Social";
import ImageFallback from "@/helpers/ImageFallback";
import { plainify } from "@/lib/utils/textConverter";
import Link from "next/link";

const AuthorCard = ({ data }: { data: any }) => {
  const { title, image, social } = data.frontmatter;
  return (
    <div className="rounded flex bg-theme-light p-4 text-left dark:bg-[#6A567A]">
      {image && (
        <ImageFallback
          className="mr-4 mb-0 rounded"
          src={image}
          alt={title}
          width={60}
          height={60}
        />
      )}
      <div>
      <h4 className="mb-1 text-left text-lg">
        <Link href={`/authors/${data.slug}`}>{title}</Link>
      </h4>
      <p className="mb-0 text-sm">{plainify(data.content?.slice(0, 100))}</p>
      {/* <Social source={social} className="social-icons" /> */}
      </div>
    </div>
  );
};

export default AuthorCard;
