import React from "react";

interface ContentSectionProps {
	title: string,
	body: string,
}

function ContentSection(props: ContentSectionProps) {
  return (
    <div className="w-100">
				 <h2 className="font-sm-heading font-bold text-xl pt-6 pb-3 sticky top-10 bg-background">{props.title}</h2>
      <p className="mb-8">{props.body}</p>
    </div>
  );
}
export default ContentSection;
