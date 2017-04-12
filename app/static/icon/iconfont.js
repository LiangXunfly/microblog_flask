;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-unie61d" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M-56.57-52.89v0 0z"  ></path>' +
    '' +
    '<path d="M743.314 475.6q-16.558-3.318-21.501-9.921t-1.659-12.145l3.318-5.508q1.094-1.094 2.224-3.318t4.414-9.391 4.978-14.334 2.753-17.652-0.564-19.877-6.638-20.407-13.805-19.877q-15.463-15.463-40.284-19.877t-49.641-0.564-46.885 9.921-36.4 11.581l-14.334 6.638q-11.050 3.318-18.218 4.414t-11.050-0.564-6.073-3.318-1.659-7.732 1.094-10.485 2.753-13.805 3.318-14.899q0-13.239-1.659-24.819t-7.167-25.914-15.994-23.161-26.48-14.334-41.379-3.318-57.372 13.239q-38.624 13.239-78.342 39.154t-68.951 54.052-53.523 54.618-37.53 43.038l-12.145 17.652q-36.4 47.451-54.052 94.901t-16.558 71.707v23.161q6.638 52.958 32.551 94.901t61.785 67.857 84.415 44.132 93.242 26.48 94.337 11.581q81.662 6.638 169.36-12.675t163.289-66.763 106.481-113.649q18.747-38.624 19.313-72.836t-11.581-55.712-31.457-38.060-36.4-24.29-30.327-9.921zM406.816 818.735q-119.156 5.508-202.443-46.356t-83.285-131.301q0-78.342 82.756-135.15t203.007-62.35 203.007 39.718 82.756 123.569q0 79.438-84.415 142.882t-201.348 68.951zM374.83 513.094q-31.986 3.318-57.372 14.899t-39.718 26.48-24.29 31.986-13.805 33.646-4.978 30.327-1.094 21.501l1.094 8.827v4.414q0 3.318 2.224 13.239t6.073 18.218 12.675 18.218 20.972 16.558q72.836 35.306 135.714 21.501t101.503-63.443q15.463-18.747 20.407-46.356t-2.224-55.712-24.819-51.299-52.394-35.871-80.003-7.167zM335.11 721.645q-6.638 1.094-12.675 0.564t-11.050-2.224-9.921-3.847-8.261-6.073-6.073-7.732-4.414-8.827-1.659-10.485q0-12.145 6.638-23.725t18.218-19.877 25.914-9.391q9.921-1.094 19.313 0.564t15.994 5.508 11.581 8.827 7.167 11.581 2.224 14.334q0 12.145-7.167 23.161t-19.313 18.747-26.48 8.827zM428.882 642.207q-7.732 5.508-15.994 4.978t-11.581-7.167l-2.224-4.414q-1.094-2.224-1.094-4.414v-4.414q0-3.318 1.094-5.508l2.224-4.414q1.094-2.224 3.318-3.318l3.318-4.414q8.827-6.638 17.088-5.508t11.581 8.827q3.318 4.414 2.753 9.921t-3.318 10.485-7.167 9.391zM820.562 411.591q6.638 0 12.145-3.318t8.827-8.261 4.414-10.485q1.094-1.094 1.094-3.318 13.239-125.794-88.265-143.446-29.798-5.508-55.182-1.094-7.732 0-13.239 3.847t-9.391 9.921-3.847 12.675q0 11.050 7.732 18.747t18.747 7.732q86.075-19.877 92.677 55.182 2.224 18.747-2.224 35.306 0 11.050 7.732 18.747t18.747 7.732zM801.815 100.478q-48.545-11.050-130.207 4.414-1.094 0-2.224 1.094l-1.094 2.224-1.094 1.094q-12.145 3.318-19.877 13.805t-7.732 22.63q0 16.558 11.050 27.574t26.48 11.050h3.318q1.094 0 4.978-1.094t8.261-1.659 9.391-2.224 8.827-3.318 14.899-1.659 27.044 1.659 35.306 8.261 38.624 16.558 38.624 27.574 33.646 40.813q28.704 65.104 11.050 125.794 0 1.094-0.564 2.224t-1.659 5.508-2.224 8.261-2.224 9.921-1.094 10.485q0 9.921 5.508 16.558t13.805 9.391 19.313 2.753q30.893 0 36.4-37.53 13.239-43.038 14.899-82.192t-5.508-68.951-21.501-55.712-33.116-44.132-41.943-33.116-44.697-23.725-44.697-14.334z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M864 384 768 384c0-141.376-114.624-256-256-256S256 242.624 256 384L160 384C142.336 384 128 398.336 128 416l0 448C128 881.6 142.336 896 160 896l704 0c17.664 0 32-14.4 32-32l0-448C896 398.336 881.664 384 864 384zM512 192c105.856 0 192 86.144 192 192L320 384C320 278.144 406.144 192 512 192zM832 832 192 832 192 448l640 0L832 832z"  ></path>' +
    '' +
    '<path d="M576 576c0-35.392-28.672-64-64-64C476.672 512 448 540.608 448 576c0 23.36 13.248 43.008 32 54.208L480 768l64 0L544 630.208C562.752 619.008 576 599.36 576 576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-hot" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M683.392 391.936c103.744 81.856 147.776 204.544 114.048 296.896-32.448 88.704-144.192 175.616-226.304 172.928 7.552-17.28 15.616-33.024 21.44-49.6 18.368-52.352 16.192-100.16-27.712-141.568C523.392 631.68 494.72 585.536 504.576 518.272c-64.064 40.448-111.36 85.12-121.92 157.888-10.368 71.36 26.368 126.72 64.192 183.36-86.656-15.488-160.96-50.496-203.904-130.112-40-74.112-38.016-149.76 16.128-216.896C287.36 477.504 321.6 446.848 355.776 417.28c78.208-67.584 135.68-142.848 104.384-255.168 115.712 10.432 202.88 145.536 180.8 286.528C657.856 425.984 670.208 409.536 683.392 391.936z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shoucang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1021.029755 962.998191c0 33.662778-25.294991 61.001809-56.530472 61.001809L59.500717 1024c-31.235481 0-56.594348-27.339031-56.594348-61.001809L2.906369 63.301354c0-33.726655 25.294991-61.001809 56.594348-61.001809l904.998565 0c31.171605 0 56.530472 27.275154 56.530472 61.001809L1021.029755 962.998191z"  ></path>' +
    '' +
    '<path d="M511.936124 179.619986c-19.290624 0-36.792714 10.795085-44.968873 27.786164L389.038238 369.204666 209.865386 395.777182C191.405153 398.52386 176.138731 411.043603 170.198241 428.290188c-5.876614 17.246585-1.469154 36.217828 11.625476 49.248581l131.329549 131.074044-30.532843 181.919531c-3.06606 18.332481 4.854594 36.664962 20.440397 47.39617 8.559416 5.876614 18.651862 8.878797 28.680432 8.878797 8.240035 0 16.48007-1.980163 24.017466-5.876614l156.177406-84.316637 156.241283 84.316637c7.47352 3.896451 15.841307 5.876614 24.081342 5.876614 10.092446 0 20.057139-3.002183 28.552679-8.878797 15.585803-10.731208 23.570332-29.063689 20.440397-47.39617l-30.468966-181.919531 131.393425-131.074044c12.966877-12.966877 17.438213-32.001996 11.497723-49.248581-5.876614-17.246585-21.206912-29.766328-39.539392-32.513006L634.897885 369.204666l-77.929013-161.798515C548.792714 190.415071 531.290624 179.619986 511.936124 179.619986L511.936124 179.619986 511.936124 179.619986z"  ></path>' +
    '' +
    '<path d="M541.702452 213.857651"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fensi" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1023.7184 694.5024c-6.5536-191.9488-181.7088-276.6336-220.9536-293.2224 45.5424-33.7408 75.2128-88.0128 75.2128-149.4016 0-102.3744-82.1504-185.344-183.5008-185.344-101.3248 0-183.4752 82.9696-183.4752 185.344 0 60.5952 28.9024 114.2016 73.3952 148.0192-31.3856 12.7232-217.5232 96.5888-224.2816 294.6048-1.8432 52.8128 5.0176 78.6432 42.4448 111.872 14.7456-82.0224 40.576-193.8944 95.9488-270.3104 0 0-81.2032 236.7488-70.144 298.2656 7.424 40.9856 25.856 126.6432 263.5264 123.0592 237.6704 3.6096 256.128-82.0736 263.5264-123.0592 11.0848-61.5168-70.1184-298.2656-70.1184-298.2656 55.3728 76.3904 81.2032 188.2624 95.9488 270.3104C1018.6752 773.1456 1025.6128 747.3152 1023.7184 694.5024zM361.3696 548.0192c-8.2688-26.752-14.8736-46.0288-14.8736-46.0288 7.808 10.7264 14.5152 22.6816 20.6592 35.0976 10.624-19.328 21.376-34.176 29.5936-44.3392-37.1456-48.3584-88.4736-72.7808-104.6784-79.6416 30.0288-22.2464 49.6128-58.0352 49.6128-98.5344 0-67.5072-54.144-122.24-120.9856-122.24-66.816 0-121.0112 54.7328-121.0112 122.24 0 39.936 19.0464 75.3408 48.384 97.6128-20.6848 8.3968-143.4368 63.6928-147.8912 194.2784-1.2032 34.8416 3.328 51.84 28.0064 73.7536 9.728-54.0672 26.7776-127.8464 63.2832-178.2272 0 0-53.5552 156.1344-46.2336 196.736 4.8384 27.008 17.024 83.5328 173.7472 81.1264 50.7136 0.7424 86.2464-4.6336 111.3856-13.2352C314.6752 671.4112 336.4864 597.4272 361.3696 548.0192z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanzhu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M823.778374 634.059963c0 0-84.184331-11.95631-95.757924-13.626345-0.815575-0.12689-1.350764-0.203638-1.37737-0.203638-6.195096-1.388627-11.30651-5.290493-14.352893-10.516518-0.102331-0.2415-2.651386-5.238304-6.374174-12.606109-11.764951-23.352871-35.806507-71.078849-35.806507-71.078849-2.969635-6.526647-9.624195-11.089569-17.349133-11.089569-7.800663 0-14.468526 4.562922-17.386996 11.089569 0 0-3.352351 6.590092-8.05649 15.933901-12.019755 23.76117-33.282011 65.813938-33.359782 65.980737-2.868327 6.181793-8.552793 10.822486-15.513322 12.262278-0.268106 0.051165-97.337909 13.779841-97.337909 13.779841-8.350179 1.976004-14.544251 9.268084-14.544251 18.037818 0 5.009084 2.026146 9.547447 5.353938 12.887518 0 0 68.771293 65.571415 69.013817 65.801658 3.836375 3.900843 6.219655 9.16473 6.219655 14.989389 0 1.27504-0.191358 2.536776-0.394996 3.799536-0.051165 0.178055-7.470135 42.487673-12.212136 69.318762-2.167363 12.416797-3.773953 21.517059-3.773953 21.517059s-0.394996 2.550079-0.394996 3.799536c0 10.273994 8.502651 18.585287 19.005866 18.585287 2.549056 0 4.945639-0.509606 7.164167-1.402953 0 0 64.10604-33.039487 82.71691-42.49893 2.995217-1.528819 4.907777-2.49789 5.111414-2.574638 2.549056-1.006933 5.328355-1.593288 8.247848-1.593288 2.868327 0 5.545296 0.574075 8.043187 1.51654 0.229221 0.075725 2.192945 1.070378 5.251607 2.650363 18.764366 9.535167 82.182744 42.385343 82.679048 42.563398 2.231831 0.905626 4.690836 1.440815 7.240915 1.440815 10.504238 0 19.043728-8.311293 19.043728-18.585287 0-0.331551-1.860371-11.218506-4.333702-25.418926-4.92108-28.235065-12.212136-69.944002-12.288884-70.631664-0.075725-0.777713-0.229221-1.543146-0.229221-2.332115 0-5.724375 2.319835-10.912537 6.054903-14.786775 0.140193-0.12689 7.749498-7.394411 17.807574-16.966417 20.421098-19.452028 51.102888-48.656163 51.102888-48.656163l0.2415-0.230244c3.352351-3.365654 5.481851-7.928576 5.481851-13.015432C838.717621 643.302465 832.34447 635.883495 823.778374 634.059963L823.778374 634.059963zM823.778374 634.059963"  ></path>' +
    '' +
    '<path d="M449.3271 686.528965c-9.292644-9.254781-14.391778-21.530362-14.391778-34.520211 0-22.917966 15.933901-42.664705 38.751582-48.056506 0.943488-0.229221 1.912559-0.407276 2.880607-0.548492 24.805966-3.505847 57.757448-8.18338 78.216409-11.076266l34.087353-67.165726c3.913123-2.051729 7.456832-4.677533 11.217483-6.959505 30.057573-18.36937 55.246255-43.773969 72.837912-74.41892 17.540492-30.54262 27.877931-65.724911 27.877931-103.418394 0-114.980731-93.373621-208.520127-208.111828-208.520127-114.76379 0-208.124108 93.539396-208.124108 208.520127 0 37.693484 10.350742 72.875774 27.89021 103.418394 19.809161 34.519188 48.924269 62.996776 84.234473 81.480756-1.988284 0.407276-4.041036 0.509606-5.991458 1.020236-13.33368 3.365654-25.851784 8.655124-37.84698 15.169491-11.892865 6.462179-22.651906 14.417361-32.951483 22.970154-15.780405 10.771321-30.898731 22.664186-44.691875 36.495192-52.722782 52.78725-83.775009 109.881596-89.154529 183.586249-0.127913 1.834788-8.578376 26.02984 26.106588 26.106588l287.169395 0c7.724938-43.8763 14.07353-54.023404 15.436574-61.672618-14.696724-14.008039-64.920592-61.899792-64.920592-61.899792-0.178055-0.178055-0.357134-0.357134-0.535189-0.509606L449.3271 686.529989zM449.3271 686.528965"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zan" viewBox="0 0 1026 1024">' +
    '' +
    '<path d="M1019.804691 484.230459C1015.538342 426.634765 960.075827 383.971289 874.74887 383.971289L646.49927 383.971289C663.564666 337.041464 672.097357 283.712119 672.097357 232.515947 672.097357 164.254385 657.165139 100.25917 629.433882 57.595693 599.569448 10.665869 563.305494 0 539.840581 0 456.646802 0 454.513628 81.060605 454.513628 106.658691 454.513628 198.385166 441.714586 238.915469 424.649195 277.312598 411.850152 302.910684 332.92272 383.971289 251.862115 383.971289L100.406773 383.971289C40.677906 383.971289-1.985571 433.034287 0.147603 503.429023L0.147603 503.429023 0.147603 503.429023 40.677906 919.39792C44.944254 983.393133 76.941861 1021.790266 140.937076 1021.790266L196.399596 1021.790266 226.264029 1021.790266C245.462593 1021.790266 262.527984 1008.991219 275.327027 998.32535 285.992896 991.92583 292.392417 985.52631 300.925113 985.52631 305.19146 985.52631 322.256851 996.192179 345.721763 1004.72487 369.186675 1015.390739 405.45063 1021.790266 439.581412 1021.790266L757.424314 1021.790266C864.083002 1021.790266 915.279174 981.259962 915.279174 915.131571 915.279174 895.933005 911.012826 883.133965 900.346957 868.201747 943.010432 857.535878 981.407565 831.937792 981.407565 785.007968 981.407565 767.942579 972.874867 740.211315 962.208998 731.678624 981.407565 727.412275 1021.937869 691.14832 1024.07104 650.618016L1024.07104 644.218496C1021.937869 612.220888 1011.272 586.622803 987.807085 571.690586 1002.739302 563.15789 1021.937869 526.893935 1024.07104 490.62998L1024.07104 484.230459 1019.804691 484.230459 1019.804691 484.230459 1019.804691 484.230459ZM300.925113 426.634765 300.925113 934.330138C285.992896 938.596486 258.261636 957.795046 258.261636 957.795046L258.261636 934.330138 258.261636 426.634765C258.261636 426.634765 288.12607 424.501592 300.925113 420.235244L300.925113 426.634765 300.925113 426.634765Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye-copy-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M921.764 518.884l-412.854-386.018-412.854 384.884c-8.077 7.53-8.527 20.193-0.979 28.261 7.54 8.063 20.218 8.518 28.289 0.971l385.514-359.379 385.531 360.473c3.868 3.614 8.778 5.4 13.678 5.4 5.335 0 10.673-2.119 14.61-6.336 7.555-8.063 7.139-20.714-0.936-28.256v0zM921.764 518.884z"  ></path>' +
    '' +
    '<path d="M795.781 526.813c-11.050 0-20.015 8.959-20.015 19.995v306.597h-160.123v-213.284h-213.495v213.284h-160.118v-306.597c0-11.036-8.955-19.995-20.014-19.995-11.065 0-20.018 8.959-20.018 19.995v346.586h240.183v-213.283h133.434v213.283h240.177v-346.586c0.001-11.036-8.965-19.995-20.011-19.995v0zM795.781 526.813z"  ></path>' +
    '' +
    '<path d="M655.677 240.214h120.089v106.64c0 11.053 8.965 20 20.015 20 11.047 0 20.012-8.947 20.012-20v-146.629h-160.117c-11.053 0-20.018 8.942-20.018 19.995-0.001 11.049 8.965 19.995 20.018 19.995v0zM655.677 240.214z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-denglu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M555.43808 543.35488c50.0736-22.81472 84.97152-73.19552 84.97152-131.85024 0-79.99488-64.88064-144.85504-144.87552-144.85504-80.03584 0-144.896 64.86016-144.896 144.85504 0 58.63424 34.87744 109.01504 84.97152 131.85024-81.77664 25.55904-141.29152 101.9904-141.29152 192.08192 0 11.32544 9.17504 20.48 20.48 20.48s20.48-9.15456 20.48-20.48c0-88.35072 71.8848-160.23552 160.23552-160.23552 88.3712 0 160.256 71.8848 160.256 160.23552 0 11.32544 9.15456 20.48 20.48 20.48s20.48-9.15456 20.48-20.48C696.75008 645.36576 637.21472 568.91392 555.43808 543.35488zM391.61856 411.52512c0-57.30304 46.61248-103.89504 103.936-103.89504 57.30304 0 103.91552 46.592 103.91552 103.89504 0 57.32352-46.61248 103.95648-103.91552 103.95648C438.23104 515.4816 391.61856 468.84864 391.61856 411.52512z"  ></path>' +
    '' +
    '<path d="M495.53408 931.328c-231.71072 0-420.22912-188.5184-420.22912-420.2496 0-231.69024 188.5184-420.22912 420.22912-420.22912 231.7312 0 420.2496 188.5184 420.2496 420.22912C915.78368 742.8096 727.26528 931.328 495.53408 931.328zM495.53408 129.78176c-210.26816 0-381.31712 171.04896-381.31712 381.29664s171.04896 381.31712 381.31712 381.31712c210.26816 0 381.3376-171.06944 381.3376-381.31712S705.80224 129.78176 495.53408 129.78176z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-hot1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M525.806959 370.860493c-25.252127 0-46.647413 8.852622-63.514569 26.361391-16.934694 17.522072-25.554002 39.436174-25.554003 65.159022 0 24.648376 8.853645 45.994544 26.258037 63.414285 17.405415 17.403369 38.531572 26.241664 62.811558 26.241664 25.086351 0 46.580898-8.635681 63.886029-25.654286 17.304108-17.017582 26.089192-38.851866 26.089192-64.941058 0-25.252127-8.887414-46.901193-26.424836-64.320935-17.507746-17.440208-38.903032-26.260084-63.551408-26.260083z" fill="#FF280D" ></path>' +
    '' +
    '<path d="M851.569324 145.43637H164.86742c-56.877405 0-103.020328 46.112224-103.020328 103.023398v421.772023c0 56.909128 46.143946 103.020328 103.020328 103.020328h265.130449l84.977394 85.851297 96.280833-85.851297h240.313228c56.878428 0 103.022375-46.111201 103.022375-103.020328V248.460792c0-56.912198-46.143946-103.024421-103.022375-103.024422zM369.364931 576.701604h-30.818913V469.455021H234.318188v107.246583h-31.15251V346.214163h31.15251v93.027743h104.22783v-93.027743h30.818913v230.487441z m262.146488-54.561663c-10.663874 18.644639-25.486464 33.470299-44.100404 44.099381-18.611893 10.630105-38.999223 16.029068-60.697407 16.029068-21.866007 0-42.423205-5.332449-61.135382-15.861246-18.712177-10.530844-33.669844-25.255197-44.401256-43.765783-10.732435-18.511609-16.196891-38.799678-16.19689-60.261479 0-22.100344 5.398964-42.776246 16.029068-61.47205 10.630105-18.710131 25.387203-33.601282 43.930535-44.248783 18.511609-10.630105 38.666648-16.012695 59.927881-16.012695 22.269189 0 43.093471 5.332449 61.907978 15.8285 18.811438 10.528797 33.834596 25.320689 44.568055 43.947931 10.731412 18.593474 16.196891 39.135322 16.196891 61.017702 0 21.679765-5.398964 42.10291-16.029069 60.699454z m194.370873-145.709593h-66.602907v200.271256h-31.151488v-200.271256h-66.938551v-30.215162h164.692946v30.215162z" fill="#FF280D" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)