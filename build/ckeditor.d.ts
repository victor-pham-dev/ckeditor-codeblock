/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { Link } from "@ckeditor/ckeditor5-link";
import { List } from "@ckeditor/ckeditor5-list";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Table, TableToolbar } from "@ckeditor/ckeditor5-table";
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Alignment | typeof BlockQuote | typeof Bold | typeof CodeBlock | typeof Essentials | typeof Heading | typeof Indent | typeof Italic | typeof Link | typeof List | typeof Paragraph | typeof Table | typeof TableToolbar)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        table: {
            contentToolbar: string[];
        };
    };
}
export default Editor;
