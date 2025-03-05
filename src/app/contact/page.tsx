import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const Contact = async () => {
  const data: RegularPage = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <form action={contact_form_action} method="POST">
                <div className="mb-6">
                  <label htmlFor="name" className="form-label">
                  Phone: +91 9952237700 
                  </label>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="form-label">
                  Email: reachus@myprobuddy.com 
                  </label>
                </div>
         {/*          <div className="mb-6">
             <label htmlFor="message" className="form-label">
                   Address: C5 Jains Ansruta, Valluvar kottam high
road, Nungambakkam, chennai, Tamil Nadu 600034.  
                  </label>
                </div>   */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
