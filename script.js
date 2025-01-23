let textColor, bgColor;

// Ввод цвета текста
do {
  textColor = prompt("Напишите цвет букв (например: red, blue, green):");
} while (!textColor || !(new Option().style.color = textColor));

// Ввод цвета фона
do {
  bgColor = prompt("Напишите задний фон текста (например: yellow, black, white):");
} while (!bgColor || !(new Option().style.color = bgColor));

// Создаем элемент для промтов и стили
const promptDiv = document.createElement("div");
promptDiv.style = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${bgColor};
  color: ${textColor};
  font-size: 20px;
  padding: 10px;
  text-align: center;
  z-index: 1000;
`;

promptDiv.textContent = `Цвет текста: ${textColor}, Цвет фона: ${bgColor}`;
document.body.appendChild(promptDiv);

// Добавляем текст и стили на страницу
document.body.style = `
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${bgColor};
  color: ${textColor};
  font-size: 24px;
  line-height: 1.8;
  text-align: justify;
  padding: 20px;
  box-sizing: border-box;
`;

document.body.textContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex omnis placeat maiores in ad. Velit facilis maiores dignissimos accusantium omnis ad recusandae laudantium nostrum libero ducimus deleniti exercitationem tenetur voluptatum iste ipsum placeat eos laboriosam cum, est commodi. Architecto vel officiis suscipit assumenda! Sunt non aut necessitatibus nisi eaque facilis ullam cum ducimus distinctio illo inventore dolorum eum libero aliquid saepe quas suscipit ea, rerum dolor nihil obcaecati quam. Ipsa, dolores deserunt tenetur sapiente, dolore animi suscipit recusandae quaerat esse nulla est commodi soluta numquam ut consectetur maiores in laudantium! Dolor porro nihil ut distinctio corrupti, accusamus tempore aspernatur qui architecto, iure omnis quisquam nisi hic est, voluptas rerum maiores ullam a odit doloribus. Dolor eos corrupti sapiente omnis doloremque! Dolore dolores in iste quisquam. Et officiis voluptate, blanditiis consequatur illum autem delectus non? Quibusdam libero numquam hic iste ea quidem, reiciendis adipisci ipsam commodi, dolores assumenda nihil distinctio recusandae iure, repudiandae est nam quaerat suscipit voluptatem accusantium quia quas. Qui iste eaque accusantium assumenda incidunt soluta enim omnis voluptates adipisci, perspiciatis eos pariatur expedita alias ipsam quia tempore laboriosam minima illum aut hic praesentium delectus in ab error. Nobis assumenda excepturi unde. Blanditiis, modi iusto maxime fugit animi commodi exercitationem praesentium velit veniam! Quis consequuntur amet nemo beatae eius saepe! Facilis id veritatis, quaerat mollitia dolores vero repellendus in, doloribus assumenda modi rem eveniet nesciunt aut atque aspernatur aperiam, quisquam natus iure aliquam nam fuga voluptatibus? Placeat labore quidem facere quae ipsa illo, quia in architecto ratione ea aliquam sed, hic molestias exercitationem vel et omnis, repudiandae voluptas tempora reprehenderit qui quis doloribus quaerat. Deserunt voluptatibus voluptatum iure nisi et quod iusto hic ea? Cum culpa, minima amet dolore velit error est porro voluptatibus nihil inventore quos quod laboriosam expedita officiis at cumque itaque eum ullam consequatur. Iusto magnam suscipit et facilis, tempore veritatis libero sapiente voluptates dolorem. Laboriosam commodi quia ratione facilis amet obcaecati eos nam tempora officiis, possimus eaque fuga minima earum, accusantium voluptas! Aspernatur quos quae placeat harum libero eveniet fugiat vel earum nulla! Quibusdam placeat doloremque est ea facere numquam maxime officia? Tenetur atque illum harum, error unde libero exercitationem ex dolorum est numquam, optio vitae nostrum sunt. Quod consectetur tenetur aliquam fugiat laborum animi blanditiis ducimus nam. Earum, nesciunt. Et ipsum magni fuga excepturi quam doloremque sint autem repellendus praesentium reprehenderit sunt dicta temporibus eaque aspernatur quo minima eos nostrum ad ipsa, officia voluptatum enim perferendis! Consequatur ipsa quaerat ex vero temporibus quis harum consectetur! Placeat ut perferendis temporibus sapiente molestias blanditiis eaque voluptates neque praesentium optio dolore voluptas asperiores aperiam, nulla cumque, incidunt accusamus soluta? Totam quisquam architecto error ipsum vero doloremque quia voluptas distinctio, libero temporibus non sapiente eum itaque, deleniti ducimus, incidunt quasi saepe perspiciatis delectus veniam voluptates! Accusantium enim, voluptates dolorum, libero architecto soluta, alias earum iste consequatur quae possimus illo aut! Inventore, quisquam expedita corporis natus fugiat voluptatum error rerum? Commodi, a officiis iste qui saepe, ipsam libero deserunt illo ut mollitia impedit inventore quam iusto nisi dolorum rerum officia quae deleniti! Numquam quibusdam quaerat similique a ad. At reprehenderit amet nobis suscipit, quam, rerum nesciunt incidunt, in laboriosam eum perspiciatis aliquam sint delectus id minima fugit fuga. Quam, ipsam? Neque alias dolorem esse, blanditiis deserunt placeat quis inventore doloribus aliquam incidunt ad sed maiores voluptatem provident quod earum. Necessitatibus cumque nihil odio nesciunt corporis quaerat architecto quis, cupiditate praesentium dolorem quidem! Consequatur doloremque tempore ad mollitia asperiores provident voluptatem quas, ducimus repudiandae dolores quaerat delectus, corporis voluptatum maxime vel veniam nemo? Iure quaerat ea alias maiores corporis vitae soluta, sed maxime, cumque ipsa velit molestias. Ipsum ipsam sint sit laboriosam. Omnis ducimus porro accusantium dicta! Ad vitae iusto tenetur. Expedita itaque, nihil in iusto nisi aspernatur aliquam dolores sed quos ullam adipisci quo sunt excepturi, libero, accusamus maiores accusantium porro aperiam dolorum non. Harum magni quae quisquam aliquid! Ad commodi voluptates accusantium fugit. Eveniet officiis dolor recusandae consequatur iure exercitationem asperiores distinctio cupiditate reiciendis debitis accusantium quaerat tempora ipsa itaque nobis, similique ad soluta, praesentium doloribus vel. Cupiditate nesciunt error maxime quaerat. Libero consequuntur optio, ipsum pariatur perferendis repellendus ea exercitationem enim aspernatur dolor id soluta quidem eos eaque! Sed laudantium fuga officiis, rerum sunt inventore, illo reiciendis voluptatum id saepe magni laboriosam alias ratione. Reiciendis nisi incidunt, error ea sapiente vitae officia blanditiis ducimus aperiam, quae accusantium quos, amet voluptates. Voluptatibus, doloremque? Voluptas expedita totam at architecto, cumque quod aut quis natus deserunt provident ullam repellendus explicabo illum temporibus sunt veniam non earum sapiente quibusdam nam. Amet corporis, aperiam quam eveniet temporibus quia. Aspernatur possimus distinctio tempora aliquid veniam commodi quod nulla aperiam culpa cumque? Maxime ullam perferendis officiis vero nam, expedita veritatis illo quidem corporis. Ad repellendus dolorem recusandae quia quibusdam odio voluptatibus repellat illum iste non! Quos quaerat aut repudiandae natus reprehenderit dignissimos eligendi, nam voluptas eaque, soluta repellat molestias vel iste ex temporibus molestiae velit enim nobis cum aliquam officia. Consectetur eligendi nemo quos explicabo adipisci nisi veritatis iste ullam consequuntur? Quidem possimus saepe voluptatibus quae quos. Itaque corporis sed ducimus asperiores. Ducimus sint optio iusto quia voluptates voluptas aspernatur impedit, consequatur consequuntur quaerat inventore deleniti amet rem expedita recusandae accusamus quibusdam quas! Doloribus cumque, ea voluptatibus, asperiores quo suscipit vitae vel quae veritatis voluptatem quam alias dolorum molestiae reprehenderit praesentium eligendi iste, quasi aspernatur fuga placeat harum! Maiores optio ad illo totam ipsum corrupti! Expedita, deleniti ipsam possimus tempore eius ex recusandae, saepe iure ut, repellat consequuntur hic soluta officia fuga reprehenderit velit perferendis tenetur. Illo cum nesciunt quae velit asperiores nihil commodi id eligendi. Sint placeat perspiciatis tempore laborum temporibus architecto vitae, hic, molestiae eius consequuntur modi quisquam ipsa excepturi quaerat, dignissimos cumque ullam eaque! Laborum similique beatae, et minus ipsam nam veniam dolorum accusantium doloribus aut iusto praesentium, aperiam odit provident saepe culpa ratione repellat. Cupiditate provident adipisci unde voluptatem enim labore facilis voluptates minus quaerat eveniet! Debitis sequi, officiis aperiam doloremque ducimus odit eaque ut eveniet fugit doloribus porro distinctio quasi nemo nesciunt fugiat in cum, veniam repellendus quis. 
`;



