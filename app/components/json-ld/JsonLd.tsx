interface JsonLdProps {
   data: Record<string, unknown>;
}

// Renders schema.org markup; "<" is escaped so the JSON cannot close the script tag
function JsonLd({ data }: JsonLdProps) {
   return (
      <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, "\\u003c"),
         }}
      />
   );
}

export default JsonLd;
