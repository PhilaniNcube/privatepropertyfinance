interface MainContentProps {
  contentHtml: string;
}

const MainContent = ({ contentHtml }: MainContentProps) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="mx-auto w-full text-left format format-sm sm:format-base lg:format-lg format-blue dark:format-invert" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </section>
  );
};

export default MainContent;