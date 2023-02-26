import { minifyHtml } from "./functions/minify-html";
import { xeitoPlugin } from "./functions/xeito-plugin";

export default function xeito() {

  return [
    minifyHtml(),
    xeitoPlugin()
  ]

}