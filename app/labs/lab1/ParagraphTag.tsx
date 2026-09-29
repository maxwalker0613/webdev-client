export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default browsers
        render them as one contiguous piece of text as shown here on the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph tag
        to tell browsers to render the gaps.
      </p>
      <p id="wd-ai-p">
        Browsers treat each paragraph tag as a block element with a default top
        and bottom margin, so wrapping text in a paragraph tag starts it on a
        new line and leaves a vertical gap between it and the text around it.
      </p>
      <p id="wd-p-your-1">
        I am originally from Shanghai, China. I completed my bachelor&apos;s
        degree in English and my first master&apos;s degree in linguistics and
        literature there.
      </p>
      <p id="wd-p-your-2">
        In this course, I hope to learn how to build full-stack Web applications
        that are dynamic, data-driven, and interactive. I am looking forward to
        combining frontend and backend technologies (including HTML, Tailwind
        CSS, React, Node.js, and MongoDB) to build the Kambaz project and learn
        how to deploy a complete product to the public Web.
      </p>
    </div>
  );
}
