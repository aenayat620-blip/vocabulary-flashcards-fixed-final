/
  Optional built-in vocabulary.
 
  Add your categories directly to this array before building/deploying.
  Each item must contain the same import text accepted by the Import screen.
 
 Example:
  export const BUNDLED_CATEGORIES = [
    String.raw`\\voccategory{Family \& People}{افراد و خانواده}
        \vwordpair{Mother}{(ما)ذِر}{مادر}{Son}{سان}{پسر}
	\vwordpair{Father}{(فا)ذِر}{پدر}{Daughter}{(دا)تِر}{دختر}
	\vwordpair{Brother}{(برا)ذِر}{برادر}{Grandfather}{(گرنـد)فاذِر}{پدربزرگ}
	\vwordpair{Sister}{(سیس)تِر}{خواهر}{Grandmother}{(گرنـد)ماذِر}{مادربزرگ}
	\vwordpair{Child\small(children)}{چایلد}{کودک}{Uncle}{(آن)کل}{عمو / دایی}
	\vwordpair{Parent}{(پ)رِنت}{والدین}{Aunt}{آنت}{عمه / خاله}
	\vwordpair{Husband}{(هاز)بند}{شوهر}{Cousin}{(کا)زِن}{پسرعمو / دخترعمو}
	\vwordpair{Wife \small(wives)}{وایف}{همسر(زن)}{Nephew}{(نـِ)فیو}{برادرزاده/خواهرزاده}
	\vwordpair{Niece}{نیس}{برادرزاده/خواهرزاده(دختر)}{Stepfather}{(استپ)فاذِر}{ناپدری}
	\vwordpair{Stepmother}{(استپ)ماذِر}{نامادری}{Stepson}{(استپ)سان}{ناپسری}
	\vwordpair{Stepdaughter}{(استپ)داتِر}{نادختری}{Half-brother}{(هاف)براذِر}{برادر ناتنی}
	\vwordpair{Half-sister}{(هاف)سیستِر}{خواهرناتنی}{Twin}{توین}{دوقلو}
	\vwordpair{Twins}{توینز}{دوقلوها}{Sibling}{(سیب)لینگ}{خواهر یا برادر}
	\vwordpair{Relative}{(رِلـ)اتیو}{خویشاوند}{Ancestor}{(اَنـ)سستر}{نیا / جد}
	\vwordpair{Descendant}{(دیـ)سندنت}{نواده / بازمانده}{Orphan}{(اُر)فن}{یتیم}
	\vwordpair{Widow}{(ویـ)دو}{بیوه (زن)}{Widower}{(ویـ)دوئر}{بیوه (مرد)}
	\vwordpair{Fianc\'e}{فیآن(سی)}{نامزد (مرد)}{Fianc\'ee}{فیآن(سی)}{نامزد (زن)}
	\vwordpair{Bride}{براید}{عروس}{Groom}{گروم}{داماد}
	\vwordpair{Spouse}{اسپاوز}{همسر}{Guardian}{(گار)دین}{سرپرست / قیم}
	\vwordpair{Godfather}{(گاد)فاذِر}{پدرخوانده}{Godmother}{(گاد)ماذِر}{مادرخوانده}
	\vwordpair{Mother-in-law}{(ماذِر)این‌لا}{مادرشوهر / مادرزن}{Father-in-law}{(فاذِر)این‌لا}{پدرشوهر / پدرزن}
	\vwordpair{Brother-in-law}{(براذِر)این‌لا}{باجناق / برادرشوهر}{Sister-in-law}{(سیستِر)این‌لا}{جاری / خواهرشوهر}
	\vwordpair{Son-in-law}{(سان)این‌لا}{داماد}{Daughter-in-law}{(داتِر)این‌لا}{عروس}
	\vwordpair{Great-grandfather}{گریت(گرنـد)فاذِر}{پدر پدربزرگ}{Great-grandmother}{گریت(گرنـد)ماذِر}{مادر مادربزرگ}
	\vwordpair{Only child}{(اون)لی چایلد}{فرزند تک}{Family tree}{(فَمـ)ایلی تری}{شجره‌نامه}
	\vwordpair{Generation}{جِنِ(رِی)شن}{نسل}{Neighbor}{(نِیـ)بر}{همسایه}
	\vwordpair{Infant}{(اینـ)فنت}{نوزاد}{Toddler}{(تادـ)لر}{کودک نوپا}
	\vwordpair{Teenager}{(تینـ)ایجر}{نوجوان}{Adult}{ا(دالـ)ت}{بزرگسال}
	\vwordpair{Elderly}{(الـ)درلی}{سالمند}{Newborn}{(نیوـ)بورن}{تازه‌متولد}
	\vwordpair{Bachelor}{(بچـ)لر}{مجرد (مرد)}{Divorced}{دیـ(ورسـ)ت}{طلاق‌گرفته}
	\vwordpair{Engaged}{این(گیجـ)د}{نامزد شده}{Married}{(مریـ)ید}{متأهل}
	\vwordpair{Single}{(سینـ)گل}{مجرد}{Widowed}{(ویدـ)ود}{بیوه (صفت)}
	\vwordpair{Adoptive parent}{ا(داپـ)تیو پرنت}{والد فرزندخوانده}{Foster child}{(فاسـ)تر چایلد}{فرزند پرورشی}
	\vwordpair{Matriarch}{(میتـ)ریآرک}{زن‌سالار خانواده}{Patriarch}{(پیتـ)ریآرک}{مرد‌سالار خانواده}
	\vwordpair{Heir}{ائر}{وارث (مرد)}{Heiress}{(ائـ)رس}{وارث (زن)}
	\vwordpair{Firstborn}{(فرستـ)بورن}{فرزند اول}{Youngest child}{(یانگـ)ست چایلد}{کوچک‌ترین فرزند}
	\vwordpair{Middle child}{(میدـ)ل چایلد}{فرزند میانی}{Nuclear family}{(نیوکـ)لیر فمیلی}{خانواده هسته‌ای}
	\vwordpair{Extended family}{اکس(تنـ)دد فمیلی}{خانواده گسترده}{Single parent}{(سینـ)گل پرنت}{والد تک‌سرپرست}
	\vwordpair{Custody}{(کاسـ)تدی}{حضانت}{Kinship}{(کینـ)شیپ}{خویشاوندی}
	\vwordpair{Lineage}{(لینـ)ییج}{نسب / تبار}{Household}{(هاوسـ)هولد}{خانوار}
	\vwordpair{Homemaker}{(هومـ)میکر}{خانه‌دار}{Breadwinner}{(برِدـ)وینر}{نان‌آور خانواده}
	\vwordpair{Dependent}{دی(پنـ)دنت}{فرد تحت تکفل}{Caretaker}{(کرـ)تیکر}{سرپرست / نگهدارنده}
	\vwordpair{Babysitter}{(بیبیـ)سیتر}{پرستار بچه}{Roommate}{(رومـ)میت}{هم‌اتاقی}
	\vwordpair{Acquaintance}{ا(کوینـ)تنس}{آشنا}{Companion}{کم(پنـ)ین}{همراه / همدم}
	\vwordpair{Colleague}{(کالـ)یگ}{همکار}{Classmate}{(کلاسـ)میت}{هم‌کلاسی}
	\vwordpair{Teammate}{(تیمـ)میت}{هم‌تیمی}{Stranger}{(استرینـ)جر}{غریبه}
	\vwordpair{Citizen}{(سیتـ)یزن}{شهروند}{Immigrant}{(ایمـ)یگرنت}{مهاجر}
	\vwordpair{Refugee}{رفیو(جی)}{پناهنده}{Neighborhood}{(نیبـ)رهود}{محله}
	\vwordpair{Ex-husband}{اکس (هازـ)بند}{همسر سابق (مرد)}{Ex-wife}{اکس (وایـ)ف}{همسر سابق (زن)}
	\vwordpair{Blended family}{(بلنـ)دد فمیلی}{خانواده ترکیبی}{In-laws}{این‌لاز}{خانواده همسر},
\voccategory{Numbers, Time \& Calendar}{اعداد، زمان و تقویم}
	\vwordpair{Zero}{زیرو}{صفر}{One}{وان}{یک}
	\vwordpair{Two}{تو}{دو}{Three}{ثری}{سه}
	\vwordpair{Four}{فور}{چهار}{Five}{فایو}{پنج}
	\vwordpair{Six}{سیکس}{شش}{Seven}{(سِـ)وِن}{هفت}
	\vwordpair{Eight}{اِیت}{هشت}{Nine}{ناین}{نه}
	\vwordpair{Ten}{تن}{ده}{Eleven}{اِ(لِـ)وِن}{یازده}
	\vwordpair{Twelve}{توِلو}{دوازده}{Thirteen}{تِر(تین)}{سیزده}
	\vwordpair{Fourteen}{فور(تین)}{چهارده}{Fifteen}{فیف(تین)}{پانزده}
	\vwordpair{Sixteen}{سیکس(تین)}{شانزده}{Seventeen}{سِوِن(تین)}{هفده}
	\vwordpair{Eighteen}{اِیـ(تین)}{هجده}{Nineteen}{ناین(تین)}{نوزده}
	\vwordpair{Twenty}{(توِن)تی}{بیست}{Thirty}{(تِر)تی}{سی}
	\vwordpair{Forty}{(فور)تی}{چهل}{Fifty}{(فیف)تی}{پنجاه}
	\vwordpair{Hundred}{(هان)دِرد}{صد}{Thousand}{(تاو)زند}{هزار}
	\vwordpair{Million}{(میل)یون}{میلیون}{First}{فرست}{اول}
	\vwordpair{Second}{(سِـ)کند}{دوم}{Third}{ثرد}{سوم}
	\vwordpair{Fourth}{فورث}{چهارم}{Fifth}{فیفث}{پنجم}
	\vwordpair{Tenth}{تنث}{دهم}{Half}{هاف}{نصف}
	\vwordpair{Quarter}{(کوار)تر}{ربع / یک‌چهارم}{Dozen}{(داز)ن}{دوجین}
	\vwordpair{Pair}{پر}{جفت}{Minute}{(میـ)نیت}{دقیقه}
	\vwordpair{Hour}{آور}{ساعت (مدت زمان)}{Day}{دی}{روز}
	\vwordpair{Week}{ویک}{هفته}{Month}{مانث}{ماه}
	\vwordpair{Year}{ییر}{سال}{Decade}{(دِکـ)ید}{دهه}
	\vwordpair{Century}{(سِنـ)چری}{قرن}{Morning}{(مور)نینگ}{صبح}
	\vwordpair{Afternoon}{افتر(نون)}{بعدازظهر}{Evening}{(ایوـ)نینگ}{عصر / غروب}
	\vwordpair{Night}{نایت}{شب}{Midnight}{(میدـ)نایت}{نیمه‌شب}
	\vwordpair{Noon}{نون}{ظهر}{Today}{تو(دی)}{امروز}
	\vwordpair{Tomorrow}{تو(مارو)}{فردا}{Yesterday}{(یِسـ)تردی}{دیروز}
	\vwordpair{Now}{ناو}{الان}{Later}{(لیـ)تر}{بعداً}
	\vwordpair{Soon}{سون}{به‌زودی}{Early}{(اِرـ)لی}{زود}
	\vwordpair{Late}{لیت}{دیر}{Always}{(آلـ)ویز}{همیشه}
	\vwordpair{Never}{(نِوـ)ر}{هرگز}{Calendar}{(کَلـ)ندر}{تقویم}
	\vwordpair{Schedule}{(سکـ)جول}{برنامه زمانی}{Date}{دیت}{تاریخ}
	\vwordpair{Deadline}{(دِدـ)لاین}{مهلت}{Appointment}{اِ(پوینـ)تمنت}{قرار ملاقات}
	\vwordpair{Anniversary}{انی(ورـ)سری}{سالگرد}{Birthday}{(بِرثـ)دی}{تولد}
	\vwordpair{Holiday}{(هالـ)ادی}{تعطیلات}{Weekday}{(ویکـ)دی}{روز هفته (کاری)}
	\vwordpair{Weekend}{(ویکـ)اند}{آخر هفته}{O'clock}{او(کلاک)}{اصطلاح گفتنِ ساعت}
	\vwordpair{Clock}{کلاک}{ساعت (وسیله)}{Watch}{واچ}{ساعت مچی}
	\vwordpair{Past}{پست}{گذشته}{Present}{(پِرـ)زنت}{حال / اکنون}
	\vwordpair{Future}{(فیوـ)چر}{آینده}{Monday}{(مانـ)دی}{دوشنبه}
	\vwordpair{Tuesday}{(توزـ)دی}{سه‌شنبه}{Wednesday}{(وِنزـ)دی}{چهارشنبه}
	\vwordpair{Thursday}{(ثرزـ)دی}{پنجشنبه}{Friday}{(فرایـ)دی}{جمعه}
	\vwordpair{Saturday}{(سَتِرـ)دی}{شنبه}{Sunday}{(سانـ)دی}{یکشنبه}
	\vwordpair{January}{(جَنـ)یوئری}{ژانویه}{February}{(فِبـ)روئری}{فوریه}
	\vwordpair{March}{مارچ}{مارس}{April}{(اِیـ)پریل}{آوریل}
	\vwordpair{May}{می}{مه}{June}{جون}{ژوئن}
	\vwordpair{July}{جو(لای)}{ژوئیه}{August}{(آگـ)است}{اوت / آگوست}
	\vwordpair{September}{سپ(تِمـ)بر}{سپتامبر}{October}{اک(توـ)بر}{اکتبر}
	\vwordpair{November}{نو(وِمـ)بر}{نوامبر}{December}{دی(سِمـ)بر}{دسامبر}
	\vwordpair{Spring}{اسپرینگ}{بهار}{Summer}{(سامـ)ر}{تابستان}
	\vwordpair{Autumn \small(Fall)}{(آتـ)م}{پاییز}{Winter}{(وینـ)تر}{زمستان}
	\vwordpair{Season}{(سیـ)زن}{فصل}{Leap year}{لیپ ییر}{سال کبیسه}
	\vwordpair{Fortnight}{(فورتـ)نایت}{دو هفته}{Semester}{سی(مسـ)تر}{نیمسال (ترم)}
	\vwordpair{Fiscal year}{(فیسـ)کال ییر}{سال مالی}{Time zone}{تایم زون}{منطقه زمانی}
	\vwordpair{Sunrise}{(سانـ)رایز}{طلوع آفتاب}{Sunset}{(سانـ)ست}{غروب آفتاب}
	\vwordpair{Twilight}{(توایـ)لایت}{گرگ‌ومیش}{Duration}{دیو(ریـ)شن}{مدت زمان}
	\vwordpair{Interval}{(اینـ)تروال}{فاصله زمانی}{Frequency}{(فریـ)کوئنسی}{بسامد / تکرار}
	\vwordpair{Punctual}{(پانکـ)چوال}{وقت‌شناس}{Overdue}{اوور(دیو)}{عقب‌افتاده از موعد}
	\vwordpair{Recent}{(ریـ)سنت}{اخیر}{Ancient}{(اینـ)شنت}{باستانی}
	\vwordpair{Modern}{(مادـ)رن}{مدرن}{Contemporary}{کن(تمـ)پوراری}{معاصر}
	\vwordpair{Era}{(ایرـ)ا}{دوره / عصر}{Forever}{فور(اوـ)ر}{برای همیشه}
	\vwordpair{Temporary}{(تمـ)پوراری}{موقت}{Permanent}{(پرمـ)ننت}{دائمی}
	\vwordpair{Digit}{(دیـ)جیت}{رقم}{Numeral}{(نیوـ)مرال}{عدد}
	\vwordpair{Even \small(number)}{(ایوـ)ن}{زوج}{Odd \small(number)}{آد}{فرد}
	\vwordpair{Plus}{پلاس}{بعلاوه}{Minus}{(مایـ)ناس}{منها}
	\vwordpair{Equal}{(ایـ)کوال}{برابر}{Sum}{سام}{حاصل جمع}
	\vwordpair{Total}{(توـ)تال}{مجموع}{Amount}{ا(ماونـ)ت}{مقدار}
	\vwordpair{Quantity}{(کوانـ)تیتی}{مقدار / کمیت}{Approximately}{اپ(راکـ)سیمتلی}{تقریباً}
	\vwordpair{Exactly}{اگ(زکـ)تلی}{دقیقاً}{Roughly}{(رافـ)لی}{تقریباً}
	\vwordpair{Several}{(سِوـ)رال}{چندین}{Few}{فیو}{چند تا (کم)}
	\vwordpair{Many}{(منـ)ی}{بسیاری}{Countless}{(کاونتـ)لس}{بی‌شمار}
	\vwordpair{Percent}{پر(سنـ)ت}{درصد}{Percentage}{پر(سنـ)تیج}{درصد (کمیت)}
	\vwordpair{A.M.}{ای‌ام}{قبل از ظهر}{P.M.}{پی‌ام}{بعد از ظهر}
	\vwordpair{Midweek}{(میدـ)ویک}{وسط هفته}{Semiannual}{سمی(انـ)یوال}{شش‌ماهه},
\voccategory{Colors \& Shapes}{رنگ‌ها و اشکال}
	\vwordpair{Red}{رد}{قرمز}{Orange}{(اُرـ)نج}{نارنجی}
	\vwordpair{Yellow}{(یِلـ)و}{زرد}{Green}{گرین}{سبز}
	\vwordpair{Blue}{بلو}{آبی}{Purple}{(پرـ)پل}{بنفش}
	\vwordpair{Pink}{پینک}{صورتی}{Brown}{براون}{قهوه‌ای}
	\vwordpair{Black}{بلک}{مشکی}{White}{وایت}{سفید}
	\vwordpair{Gray}{گری}{خاکستری}{Gold}{گلد}{طلایی}
	\vwordpair{Silver}{(سیلـ)ور}{نقره‌ای}{Beige}{بِیژ}{بژ}
	\vwordpair{Turquoise}{(تِرـ)کویز}{فیروزه‌ای}{Navy}{(نیـ)وی}{سرمه‌ای}
	\vwordpair{Maroon}{م(ارون)}{زرشکی}{Lavender}{(لَوـ)ندر}{بنفش کمرنگ}
	\vwordpair{Cream}{کریم}{کرم}{Ivory}{(آیوـ)ری}{عاجی}
	\vwordpair{Tan}{تَن}{قهوه‌ای روشن}{Olive}{(آلـ)یو}{زیتونی}
	\vwordpair{Magenta}{م(جِنـ)تا}{سرخابی}{Indigo}{(اینـ)دیگو}{نیلی}
	\vwordpair{Crimson}{(کریمـ)زن}{قرمز لاکی}{Teal}{تیل}{سبزآبی}
	\vwordpair{Lime}{لایم}{سبز لیمویی}{Peach}{پیچ}{هلویی}
	\vwordpair{Coral}{(کُرـ)ال}{مرجانی}{Burgundy}{(بِرگـ)ندی}{زرشکی تیره}
	\vwordpair{Charcoal}{(چارـ)کول}{زغالی}{Mint}{مینت}{نعنایی}
	\vwordpair{Circle}{(سِرـ)کل}{دایره}{Square}{اسکوئر}{مربع}
	\vwordpair{Triangle}{(ترایـ)انگل}{مثلث}{Rectangle}{(رکـ)تنگل}{مستطیل}
	\vwordpair{Oval}{(اُوـ)ول}{بیضی}{Diamond}{(دایـ)موند}{لوزی}
	\vwordpair{Star}{استار}{ستاره}{Heart}{هارت}{قلب}
	\vwordpair{Pentagon}{(پنـ)تاگان}{پنج‌ضلعی}{Hexagon}{(هکـ)ساگان}{شش‌ضلعی}
	\vwordpair{Octagon}{(آکـ)تاگان}{هشت‌ضلعی}{Cube}{کیوب}{مکعب}
	\vwordpair{Sphere}{اسفیر}{کره}{Cylinder}{(سیلـ)یندر}{استوانه}
	\vwordpair{Cone}{کون}{مخروط}{Pyramid}{(پیرـ)امید}{هرم}
	\vwordpair{Line}{لاین}{خط}{Dot}{دات}{نقطه}
	\vwordpair{Curve}{کرو}{منحنی}{Angle}{(انـ)گل}{زاویه}
	\vwordpair{Corner}{(کورـ)نر}{گوشه}{Edge}{اج}{لبه}
	\vwordpair{Side}{ساید}{ضلع / طرف}{Round}{راوند}{گرد}
	\vwordpair{Flat}{فلَت}{تخت / صاف}{Light}{لایت}{روشن}
	\vwordpair{Dark}{دارک}{تیره}{Bright}{برایت}{درخشان}
	\vwordpair{Pale}{پیل}{کم‌رنگ}{Colorful}{(کالـ)رفول}{رنگارنگ}
	\vwordpair{Colorless}{(کالـ)رلس}{بی‌رنگ}{Transparent}{ترنس(پرـ)نت}{شفاف}
	\vwordpair{Opaque}{او(پیک)}{کدر / مات}{Shiny}{(شایـ)نی}{براق}
	\vwordpair{Dull}{دال}{بی‌جلا}{Plain}{پلین}{ساده (بدون طرح)}
	\vwordpair{Striped}{استرایپت}{راه‌راه}{Spotted}{(اسپاتـ)د}{خال‌خالی}
	\vwordpair{Checkered}{(چکـ)رد}{شطرنجی}{Solid}{(سالـ)اید}{یکدست (بدون طرح)}
	\vwordpair{Aquamarine}{اکوا(مریـ)ن}{فیروزه‌ای‌آبی}{Amber}{(امـ)بر}{کهربایی}
	\vwordpair{Fuchsia}{(فیوـ)شا}{سرخابی روشن}{Periwinkle}{(پریـ)وینکل}{آبی‌بنفش کمرنگ}
	\vwordpair{Mauve}{موو}{بنفش خاکستری}{Ochre}{(اوـ)کر}{اُخرایی}
	\vwordpair{Rust}{راست}{زنگ‌زده (رنگ)}{Copper}{(کاپـ)ر}{مسی}
	\vwordpair{Bronze}{برانز}{برنزی}{Khaki}{(کاـ)کی}{خاکی (رنگ)}
	\vwordpair{Salmon}{(سامـ)ن}{صورتی ماهی}{Plum \small(color)}{پلام}{آلویی}
	\vwordpair{Emerald}{(امـ)رالد}{زمردی}{Ruby}{(روـ)بی}{یاقوتی}
	\vwordpair{Sapphire}{(سفـ)ایر}{یاقوت‌کبود}{Jade}{جید}{یشمی}
	\vwordpair{Pastel}{پ(ستـ)ل}{پاستلی}{Neon}{(نیـ)آن}{نئونی}
	\vwordpair{Metallic}{م(تلـ)یک}{فلزی}{Multicolored}{(مالـ)تی‌کالرد}{چندرنگ}
	\vwordpair{Monochrome}{(مانـ)اکروم}{تک‌رنگ}{Vivid}{(ویوـ)ید}{پررنگ / زنده}
	\vwordpair{Faded}{(فیدـ)ید}{رنگ‌پریده}{Vibrant}{(وایـ)برنت}{پرانرژی}
	\vwordpair{Muted}{(میوـ)تد}{کدر (ملایم)}{Shade}{شید}{سایه‌رنگ}
	\vwordpair{Tint}{تینت}{ته‌رنگ روشن}{Hue}{هیو}{طیف رنگ}
	\vwordpair{Parallelogram}{پارا(لـ)لوگرام}{متوازی‌الاضلاع}{Trapezoid}{(ترپـ)زوید}{ذوزنقه}
	\vwordpair{Rhombus}{(رامـ)بس}{لوزی (هندسی)}{Polygon}{(پالـ)یگان}{چندضلعی}
	\vwordpair{Semicircle}{(سمیـ)سیرکل}{نیم‌دایره}{Ellipse}{ا(لیپـ)س}{بیضی (هندسی)}
	\vwordpair{Prism}{پریزم}{منشور}{Symmetrical}{سی(متـ)ریکال}{متقارن}
	\vwordpair{Asymmetrical}{ای‌سی(متـ)ریکال}{نامتقارن}{Diagonal}{دای(اگـ)نال}{قطری}
	\vwordpair{Perpendicular}{پرپن(دیکـ)یولار}{عمود}{Parallel}{(پارـ)الل}{موازی}
	\vwordpair{Vertex}{(ورـ)تکس}{رأس}{Perimeter}{پ(ریمـ)یتر}{محیط (هندسی)}
	\vwordpair{Radius}{(ریدـ)یوس}{شعاع}{Diameter}{دای(امـ)یتر}{قطر}
	\vwordpair{Two-dimensional}{تو-دای(منـ)شنال}{دوبعدی}{Three-dimensional}{ثری-دای(منـ)شنال}{سه‌بعدی}
	\vwordpair{Concave}{(کانـ)کیو}{مقعر}{Convex}{(کانـ)وکس}{محدب}
	\vwordpair{Zigzag}{(زیگـ)زگ}{زیگزاگ}{Spiral}{(اسپایـ)رال}{مارپیچ}
  ];
 *
 * Leave the array empty if you prefer to import categories from the app.
 */
export const BUNDLED_CATEGORIES: string[] = [];
