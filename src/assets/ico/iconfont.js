;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-lipinicon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M827.072 303.821h-141.71c15.902-8.947 30.652-19.466 43.093-31.051 56.842-53.016 67.127-129.351 22.899-170.607-18.516-17.219-43.669-25.592-70.813-25.592-37.669 0-79.205 16.104-112.289 46.916-19.148 17.846-35.599 40.773-47.319 64.903-11.723-24.13-28.178-47.058-47.332-64.903-33.065-30.812-74.601-46.916-112.289-46.916-27.145 0-52.278 8.372-70.794 25.592-44.206 41.256-33.922 117.592 22.921 170.607 12.435 11.586 27.175 22.104 43.071 31.051h-141.71c-33.683 0-61.226 27.544-61.226 61.227v214.293h336.749v-248.441c11.239-3.038 21.153-8.107 29.099-15.52 0.519-0.484 1.017-0.982 1.515-1.481 0.498 0.499 0.995 0.998 1.514 1.481 7.946 7.413 17.86 12.484 29.099 15.52v248.441h336.749v-214.293c-0.001-33.683-27.545-61.227-61.227-61.227zM477.088 269.421c-0.020 0-4.125 2.55-15.606 2.55-32.627 0-77.968-19.333-105.454-44.922-22.481-20.966-30.494-44.207-30.494-58.955 0-13.156 5.721-18.456 7.594-20.17 8.271-7.733 21.205-8.85 28.182-8.85 23.398 0 49.447 11.261 69.717 30.096 38.287 35.715 51.403 89.609 46.060 100.252zM565.74 270.256c-0.020 0-0.060 0.041-0.060 0.041-6.039-12.318 7.135-65.652 45.163-101.129 20.269-18.835 46.318-30.096 69.697-30.096 7.015 0 19.93 1.117 28.202 8.85 1.894 1.735 7.593 7.056 7.593 20.21 0 14.748-7.972 37.949-30.473 58.915-27.485 25.59-72.847 44.922-105.473 44.922-9.425 0-13.869-1.715-14.647-1.715zM551.549 916.092h275.521c33.683 0 61.226-27.546 61.226-61.227v-214.295h-336.748v275.522zM153.575 854.863c0 33.682 27.544 61.227 61.226 61.227h275.521v-275.522h-336.748v214.295z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M550.658973 490.564805l324.395228-324.386018c10.945283-10.945283 10.945283-28.698622 0-39.643905-10.948353-10.9504-28.703739-10.9504-39.647999-0.004093L511.009951 450.915783 186.624956 126.530788c-10.946306-10.946306-28.702716-10.946306-39.647999 0-10.946306 10.949376-10.946306 28.702716 0 39.647999l324.384995 324.386018L146.976958 814.966173c-10.946306 10.94426-10.946306 28.702716 0 39.649022 10.945283 10.94426 28.701692 10.94426 39.647999 0l324.384995-324.401368 324.396251 324.401368c10.94426 10.94426 28.699646 10.94426 39.647999 0 10.945283-10.946306 10.945283-28.704762 0-39.649022L550.658973 490.564805z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cuxiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1017.771 511.331c0 280.666-227.523 508.191-508.191 508.191s-508.19-227.525-508.19-508.191c0-280.665 227.523-508.19 508.191-508.19s508.19 227.523 508.19 508.19zM191.408 497.813c5.731 21.437 10.081 40.646 13.053 57.622 7.534-10.825 14.749-22.071 21.648-33.746v145.491h41.706v-228.902c9.551-22.923 18.358-47.011 26.423-72.268l-42.023-10.506c-15.281 54.971-35.552 102.406-60.806 142.307zM303.472 498.13h75.452v111.746c-17.617-7.427-29.766-23.133-36.453-47.118 2.441-16.659 3.447-34.17 3.025-52.53h-39.796c0.849 55.82-11.569 98.693-37.249 128.619 12.946 11.673 23.877 22.179 32.79 31.518 12.735-18.146 22.709-37.833 29.925-59.056 9.126 19.843 22.894 33.214 41.308 40.113 18.412 6.897 58.763 9.814 121.057 8.755 4.031-14.007 8.489-28.334 13.371-42.978-27.061 0.745-55.82 0.318-86.275-1.274v-43.298h73.223v-38.522h-73.223v-35.974h63.037v-127.345h-180.194v127.345zM346.131 457.381v-45.844h94.871v45.844h-94.871zM627.882 394.026h-43.139c3.395-10.081 6.631-20.48 9.71-31.2-0.214 0-13.585-2.758-40.113-8.277-7.854 36.718-20.589 71.314-38.205 103.787 3.82 14.007 7.745 30.988 11.779 50.939 4.669-6.473 9.179-13.265 13.531-20.375h8.755v32.155h-33.11v35.974h33.11v52.53c0 11.461-3.184 21.225-9.551 29.289l22.923 31.518c3.925-5.201 23.877-19.101 59.852-41.706-1.91-15.068-3.079-29.076-3.502-42.023-9.339 5.943-18.784 11.675-28.334 17.191v-46.799h31.518v-35.974h-31.518v-32.155h31.2v-35.974h-61.762c3.606-7.427 7.056-15.174 10.347-23.241h56.509v-35.658zM628.836 384.157c13.583 15.495 27.379 32.579 41.387 51.255l30.244-25.469c-15.706-19.101-30.351-35.761-43.933-49.984l-27.698 24.196zM709.382 440.826h-73.86v222.535h42.661v-66.22h100.284v7.004c0 11.461-6.156 17.191-18.465 17.191-13.159 0-26.638-0.318-40.432-0.955 4.669 14.644 8.277 28.864 10.825 42.661 24.937 0 43.377-0.346 55.315-1.036 11.939-0.692 20.826-4.802 26.662-12.337 5.836-7.537 8.755-18.465 8.755-32.79v-176.055h-69.722v-86.594h-42.023v86.594zM778.466 502.907h-100.284v-24.195h100.284v24.195zM678.182 538.244h100.284v23.877h-100.284v-23.877zM755.546 413.446l27.379 23.241c16.34-17.403 31.518-34.806 45.526-52.211l-29.925-22.923c-12.099 16.77-26.426 34.065-42.979 51.894z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinpin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1017.771 511.331c0 280.666-227.523 508.191-508.191 508.191s-508.19-227.525-508.19-508.191c0-280.665 227.523-508.19 508.191-508.19s508.19 227.523 508.19 508.19zM354.092 383.202h-53.486c-3.291-11.037-6.475-20.692-9.551-28.972l-43.933 7.958c2.651 6.262 5.411 13.267 8.277 21.012h-56.668v35.657h106.333c-3.927 8.596-11.142 21.757-21.648 39.476h-14.007c-5.731-11.779-12.841-24.725-21.33-38.839l-34.701 14.007c4.777 7.854 9.391 16.131 13.849 24.832h-34.224v35.657h64.945v20.692h-59.852v35.657h59.852v58.579c-0.214 9.551-4.352 14.326-12.417 14.326-5.201 0-10.401-0.211-15.599-0.637 7.852-17.933 14.644-36.506 20.375-55.713l-35.657-10.825c-7.854 26.742-17.087 50.090-27.697 70.039 14.432 5.516 25.787 10.825 34.065 15.919l6.686-14.167c3.289 11.247 5.411 23.186 6.367 35.817 20.161 0 33.984-0.77 41.467-2.307 7.482-1.539 13.317-5.173 17.51-10.903 4.192-5.731 6.287-13.531 6.287-23.399v-76.725h56.032v-35.657h-56.032v-20.692h61.762v-35.657h-32.79c7.323-10.929 12.735-19.101 16.236-24.514-16.874-7.323-28.229-12.308-34.065-14.964h43.616v-35.657zM506.905 458.336h-94.235v-42.342c34.17-3.184 65.583-8.596 94.235-16.236l-18.145-41.706c-30.351 10.612-69.722 18.362-118.112 23.241v143.263c0 29.504-4.404 54.599-13.212 75.293-9.977-18.994-18.732-33.587-26.266-43.775l-30.563 15.281c8.701 14.644 16.766 30.351 24.195 47.118l32.474-18.306c-6.793 15.919-16.236 29.234-28.334 39.954 12.308 8.701 25.681 19.314 40.113 31.836 29.076-35.339 43.616-86.594 43.616-153.769v-18.146h28.017v165.549h42.023v-165.549h24.195v-41.707zM619.604 663.678h43.933v-149.312h-132.438v149.312h43.933v-14.963h44.571v14.963zM561.026 489.535h229.22v-121.614h-229.22v121.614zM575.034 553.209h44.571v56.668h-44.571v-56.668zM743.13 449.421h-134.986v-41.387h134.986v41.387zM775.921 648.717v14.964h43.933v-149.313h-132.756v149.312h43.933v-14.963h44.89zM731.031 609.876v-56.668h44.89v56.668h-44.89z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-saoyisao" viewBox="0 0 1091 1024">' +
    '' +
    '<path d="M1030.059162 0l-302.958577 0 0 36.355029 290.840234 0c19.995266 0 36.355029 16.359763 36.355029 36.355029l0 254.485205 36.355029 0L1090.650878 60.591715C1090.650878 27.266272 1063.384606 0 1030.059162 0zM0 60.591715l0 266.603548 36.355029 0L36.355029 72.710059c0-19.995266 16.359763-36.355029 36.355029-36.355029l284.781063 0L357.491121 0 60.591715 0C27.266272 0 0 27.266272 0 60.591715zM1054.295848 951.289932c0 19.995266-16.359763 36.355029-36.355029 36.355029l-290.840234 0 0 36.355029 302.958577 0c33.325443 0 60.591715-27.266272 60.591715-60.591715l0-266.603548-36.355029 0L1054.295848 951.289932zM36.355029 951.289932l0-254.485205L0 696.804727l0 266.603548c0 33.325443 27.266272 60.591715 60.591715 60.591715l296.899406 0 0-36.355029L72.710059 987.644961C52.714792 987.644961 36.355029 971.891115 36.355029 951.289932z"  ></path>' +
    '' +
    '<path d="M0 478.674552l1090.650878 0 0 36.355029-1090.650878 0 0-36.355029Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon111" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M735.654826 272.062326c0 0-18.626219-201.436802-228.456179-201.436802S297.368688 288.848641 297.368688 288.848641L171.470303 288.848641l0 654.670373 679.849846 0L851.320149 280.455483 735.654826 272.062326zM511.395226 129.274272c147.193387-0.802272 161.620981 135.934972 161.620981 135.934972l0 104.502076c0 0-52.508911 26.202779-69.295226 1.023306l-1.230014-116.15958L434.625772 254.575046l-1.943258 109.813035c0 0-28.146037 19.039635-65.915245 2.25332L366.767268 257.942747C366.767268 257.942747 364.201839 130.077567 511.395226 129.274272zM633.096009 830.210365l-118.631888-50.358945-122.621758 52.405557 27.226085-127.944997-92.325755-96.522334 128.048351-33.57263 56.602136-109.11207 67.14526 110.032022 125.898385 32.652677-100.718913 98.6723L633.096009 830.210365z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanyu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.281869 66.514903c-245.173932 0-444.629613 199.462844-444.629613 444.611194 0 245.184165 199.456704 444.641893 444.629613 444.641893 245.167792 0 444.623473-199.491497 444.623473-444.641893C954.905342 265.977747 755.450684 66.514903 510.281869 66.514903zM510.281869 914.725224c-222.541469 0-403.585825-181.046403-403.585825-403.598104 0-222.517933 181.044356-403.568429 403.585825-403.568429 222.537376 0 403.580708 181.050496 403.580708 403.568429C913.862577 733.648123 732.819245 914.725224 510.281869 914.725224zM530.568914 448.603111c0-39.662325-40.539298-39.825031-40.539298 0L490.029616 773.438361c0 39.33896 41.371246 39.314401 40.539298 0L530.568914 448.603111zM489.75844 353.813235l41.042765 0 0-68.403926L489.75844 285.409308 489.75844 353.813235z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M243.524 669.754c-111.648-111.624-111.648-293.254 0-404.878 54.089-54.116 125.98-83.86 202.479-83.86 76.441 0 148.333 29.744 202.422 83.86 111.648 111.624 111.648 293.254 0 404.878-54.089 54.059-125.98 83.86-202.479 83.86-76.441 0-148.333-29.8-202.422-83.86v0zM921.6 902.446l-214.48-214.484c114.093-134.978 109.031-336.343-18.2-463.574-67.114-67.122-155.044-100.654-242.918-100.654-87.93 0-175.861 33.533-242.974 100.654-134.171 134.13-134.171 351.667 0 485.854 67.114 67.065 155.044 100.654 242.918 100.654 78.887 0 156.864-28.5 220.679-82.446l214.536 214.484 40.439-40.488z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanshangpin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M473.192 212.942h-129.361c-8.944 0-15.809-1.973-20.602-5.924-4.792-3.952-8.144-8.963-10.061-15.041-1.917-6.079-2.875-12.915-2.875-20.511 0-7.597 0.637-14.737 1.917-21.423 0.637-6.684 1.917-13.978 3.833-21.877 1.915-7.902 4.63-14.585 8.144-20.056 3.513-5.467 8.144-9.114 13.896-10.94 5.749-1.823 12.775-0.303 21.081 4.56 9.582 5.467 20.44 11.394 32.577 17.775 12.14 6.382 23.956 12.763 35.455 19.145 11.498 6.382 22.198 12.154 32.101 17.32 9.903 5.164 17.408 9.266 22.519 12.306 6.386 4.254 11.179 8.963 14.374 14.132 3.194 5.164 4.47 10.027 3.832 14.585-0.637 4.558-3.194 8.357-7.665 11.396-4.472 3.037-10.861 4.555-19.164 4.555v0zM547.934 212.033h128.4c8.946 0 15.812-1.975 20.604-5.924 4.79-3.952 8.145-8.966 10.061-15.044 1.915-6.076 2.873-12.915 2.873-20.509 0-7.599-0.318-14.738-0.958-21.427-1.276-6.682-2.714-13.826-4.311-21.42-1.597-7.599-4.154-14.129-7.665-19.601-3.516-5.468-8.147-9.114-13.896-10.94-5.751-1.823-12.775-0.609-21.081 3.649-9.582 5.467-20.443 11.394-32.579 17.775-12.137 6.382-24.115 12.763-35.934 19.145-11.817 6.382-22.677 12.154-32.579 17.32-9.899 5.164-17.088 9.269-21.561 12.308-7.027 4.252-12.137 8.963-15.33 14.129-3.193 5.164-4.472 10.028-3.833 14.585 0.641 4.558 3.196 8.357 7.667 11.396 4.469 3.039 11.178 4.558 20.122 4.558v0zM459.777 272.199h-277.886c-20.443 0-33.698 3.191-39.766 9.569-6.068 6.383-9.103 16.562-9.103 30.541v80.224c0 15.193 3.352 26.436 10.061 33.728 6.707 7.294 19.964 10.94 39.766 10.94h276.928v-165.003zM564.223 272.199h274.053c20.443 0 34.338 3.8 41.683 11.394 7.348 7.597 11.020 18.387 11.020 32.364v78.4c0 14.585-3.355 25.372-10.061 32.36-6.707 6.991-19.964 10.484-39.766 10.484h-276.928v-165.003zM459.777 485.517h-294.175v344.591c0 30.996 9.262 55.003 27.787 72.019 18.526 17.017 47.272 25.526 86.241 25.526h180.146v-442.136zM564.223 485.517h293.216v341.858c-0.637 30.996-9.899 55.455-27.787 73.385-17.888 17.928-46.313 26.892-85.283 26.892h-180.146v-442.134z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1366 1024">' +
    '' +
    '<path d="M660.070 0c-283.106 0-512 228.894-512 512s228.894 512 512 512c283.106 0 512-228.894 512-512 0-283.106-228.894-512-512-512zM510.987 314.729c7.529-19.576 19.576-37.647 34.635-52.706s33.129-27.106 51.2-34.635c19.576-7.529 40.659-12.047 60.235-12.047 21.082 0 42.165 4.518 60.235 12.047 19.576 7.529 37.647 19.576 51.2 34.635 15.059 15.059 27.106 33.129 34.635 52.706 7.529 19.576 12.047 40.659 12.047 61.741 0 21.082-4.518 42.165-12.047 61.741-7.529 19.576-19.576 37.647-34.635 52.706-15.059 15.059-33.129 27.106-51.2 34.635-19.576 7.529-40.659 12.047-60.235 12.047-21.082 0-42.165-4.518-60.235-12.047-19.576-7.529-37.647-19.576-51.2-34.635-15.059-15.059-27.106-33.129-34.635-52.706-7.529-19.576-12.047-40.659-12.047-61.741 0-22.588 4.518-43.671 12.047-61.741zM910.046 772.518c-6.024 16.565-18.071 25.6-34.635 34.635-15.059 9.035-36.141 12.047-58.729 12.047 0 0 0 0 0 0h-316.235c0 0 0 0 0 0-22.588 0-42.165-4.518-58.729-13.553-16.565-9.035-28.612-22.588-34.635-37.647-6.024-16.565-6.024-40.659 0-58.729 3.012-7.529 4.518-16.565 9.035-24.094 45.176-87.341 137.035-147.576 242.447-147.576 76.8 0 146.071 30.118 195.765 81.318 21.082 22.588 33.129 39.153 45.176 63.247 4.518 7.529 9.035 15.059 10.541 24.094 3.012 9.035 6.024 22.588 6.024 34.635 0 12.047-3.012 22.588-6.024 31.624z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangjia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M770.468162 487.110965c16.424831 14.648039 36.785986 24.767158 59.041652 28.656913l0 372.069992c0 16.805572-13.156054 30.355358-29.487948 30.355358L209.761842 918.193229c-16.329296 0-29.590279-13.549786-29.590279-30.355358l0-371.929088c22.357197-3.57357 42.6468-13.232002 59.148579-27.453731l0 198.008354 531.148019 0L770.468162 487.110965 770.468162 487.110965zM817.421034 201.115641c4.234121 0 8.263381 0.920374 12.08878 2.369389L829.509813 169.345445c0-16.769597-13.156054-30.318783-29.487948-30.318783L209.761842 139.026662c-16.329296 0-29.590279 13.549187-29.590279 30.318783l0 34.528521c4.238118-1.660871 8.85238-2.758124 13.537195-2.758124L817.421034 201.115841zM817.421034 237.556861l-46.953072 0L239.320142 237.556861 193.708758 237.556861l-118.472039 130.64776c0 48.785626 38.548187 88.375105 86.021306 88.375105 9.885678 0 19.291282-1.768797 28.179838-4.88168 0.275812-0.17688 0.69153-0.319783 0.965344-0.460087 2.790103-0.991726 5.443299-2.08798 7.956989-3.358716 0.311188-0.142903 0.726506-0.355158 1.067674-0.567014 2.688172-1.380461 5.340768-2.832074 7.857057-4.457969 0.10233-0.071351 0.276212-0.178479 0.341768-0.247432 10.95595-7.218491 20.186673-16.910501 27.078587-28.230803 0-0.071951 0.069952-0.179478 0.069952-0.284407 1.652476-2.760723 3.168445-5.732502 4.544909-8.738458l0-0.035976c5.169485-11.251349 8.061518-23.844786 8.061518-37.112763 0 48.785626 38.582564 88.375105 86.056282 88.375105 47.505097 0 86.055682-39.589479 86.055682-88.375105 0 48.785626 38.548187 88.375105 86.123236 88.375105 47.505496 0 86.056282-39.589479 86.056282-88.375105 0 48.785626 38.480633 88.375105 86.126234 88.375105 47.39657 0 85.984331-39.589479 85.984331-88.375105 0 15.603789 3.992285 30.24983 10.85362 43.022145 0.371747 0.564616 0.687532 1.129832 1.068274 1.697246 1.30811 2.192909 2.61822 4.386018 4.093217 6.507575 0.380741 0.567014 0.929368 1.311108 1.486989 2.052604 1.448015 1.875725 2.961986 3.892353 4.613863 5.696526 0.482672 0.60359 0.929368 1.097254 1.374066 1.66187 2.005636 2.228485 4.169165 4.247512 6.406643 6.192789 0.074949 0.104929 0.138906 0.247831 0.27881 0.283807 7.576848 6.650478 16.229964 11.885318 25.699324 15.563417 0.065955 0 0.241836 0.035976 0.307791 0.142903 3.174841 1.168206 6.238758 2.193508 9.54351 2.972579l0 0c6.582524 1.66147 13.370908 2.584243 20.287205 2.584243 47.576448 0 86.163209-39.58888 86.163209-88.375105L817.421034 237.556861z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-waibudanju" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M424.949 241.866l209.233 0c16.478 0 29.89-13.502 29.89-30.112l0-75.281c0-16.607-13.411-30.114-29.89-30.114l-209.233 0c-16.484 0-29.891 13.505-29.891 30.114l0 75.281C395.064 228.363 408.466 241.866 424.949 241.866zM424.949 136.473l209.233 0 0.012 75.281L424.949 211.754 424.949 136.473 424.949 136.473zM813.522 106.359 693.961 106.359l0 30.114 119.56 0c24.725 0 44.834 20.262 44.834 45.169l0 602.257c0 24.908-20.11 45.168-44.834 45.168L245.609 829.067c-24.721 0-44.834-20.259-44.834-45.168l0-602.256c0-24.906 20.113-45.169 44.834-45.169l119.56 0L365.169 106.36l-119.56 0c-41.199 0-74.724 33.776-74.724 75.282L170.885 783.9c0 41.509 33.524 75.285 74.724 75.285l567.912 0c41.203 0 74.724-33.775 74.724-75.285L888.245 181.643C888.246 140.136 854.725 106.359 813.522 106.359z"  ></path>' +
    '' +
    '<path d="M726.61504 584.10496c-4.83328-8.53504-10.80832-17.84832-17.92-27.94496-7.11168-10.09664-14.79168-20.33664-23.04-30.72-8.24832-10.38336-17.06496-20.62336-26.45504-30.72-9.38496-10.09664-18.91328-19.69664-28.58496-28.8l19.2-18.77504c8.53504 8.53504 17.35168 17.77664 26.45504 27.73504 9.10336 9.95328 18.06336 20.05504 26.88 30.29504 8.81664 10.24 17.13664 20.40832 24.96 30.50496s15.00672 19.55328 21.54496 28.37504L726.61504 584.10496zM626.34496 349.44c-2.27328 1.42336-4.12672 3.2-5.54496 5.33504-1.42336 2.13504-2.13504 4.48-2.13504 7.04L618.66496 650.24c0 6.82496 0.07168 13.01504 0.21504 18.56 0.14336 5.54496 0.35328 10.88 0.64 16 0.28672 5.12 0.64 10.24 1.06496 15.36 0.42496 5.12 0.92672 10.52672 1.49504 16.21504l-33.70496 0c1.42336-11.37664 2.41664-22.18496 2.98496-32.42496s0.85504-21.47328 0.85504-33.70496L592.21504 422.4c0-11.09504-0.07168-20.90496-0.21504-29.44s-0.28672-16.14336-0.42496-22.82496c-0.14336-6.68672-0.42496-12.58496-0.85504-17.70496-0.42496-5.12-0.92672-9.81504-1.49504-14.08 5.97504 0.56832 11.87328 1.06496 17.70496 1.49504 5.83168 0.42496 11.87328 0.64 18.13504 0.64 2.84672 0 4.55168 0.99328 5.12 2.98496C630.75328 345.45664 629.47328 347.44832 626.34496 349.44L626.34496 349.44zM489.38496 561.49504c9.95328-17.35168 17.77664-35.27168 23.46496-53.76 5.68832-18.48832 10.09664-39.96672 13.22496-64.42496L437.76 443.31008c-9.10336 17.92-18.98496 35.27168-29.65504 52.05504-10.66496 16.78336-21.54496 32.42496-32.64 46.93504-4.83328-4.26496-9.24672-7.46496-13.22496-9.6-3.98336-2.13504-8.39168-3.48672-13.22496-4.05504 6.82496-6.82496 13.58336-14.36672 20.26496-22.61504 6.68672-8.24832 12.94336-16.64 18.77504-25.17504 5.83168-8.53504 11.16672-16.99328 16-25.38496 4.83328-8.39168 8.96-16.28672 12.37504-23.68 7.11168-15.92832 13.22496-31.71328 18.34496-47.36 5.12-15.64672 9.10336-30.72 11.94496-45.22496 5.97504 2.56 11.44832 4.40832 16.42496 5.54496 4.97664 1.13664 10.31168 1.84832 16 2.13504 3.69664 0.28672 5.76 1.35168 6.18496 3.2 0.42496 1.84832-1.35168 3.76832-5.33504 5.76-3.41504 1.70496-6.32832 4.62336-8.74496 8.74496-2.41664 4.12672-5.19168 10.73664-8.32 19.84-4.55168 12.51328-9.52832 24.88832-14.93504 37.12 19.34336 0 35.41504-0.07168 48.21504-0.21504 12.8-0.14336 23.32672-0.28672 31.57504-0.42496 8.24832-0.14336 14.64832-0.35328 19.2-0.64 4.55168-0.28672 8.10496-0.71168 10.66496-1.28-1.70496 17.35168-4.62336 34.84672-8.74496 52.48-4.12672 17.63328-8.81664 34.27328-14.08 49.92-5.26336 15.64672-10.80832 29.79328-16.64 42.45504-5.83168 12.65664-11.30496 22.54336-16.42496 29.65504-14.22336 19.62496-31.36 38.11328-51.41504 55.46496-20.05504 17.35168-44.16 34.84672-72.32 52.48-3.98336-5.40672-8.24832-9.74336-12.8-13.01504-4.55168-3.27168-9.95328-6.18496-16.21504-8.74496 29.29664-14.50496 54.32832-29.51168 75.09504-45.01504 20.76672-15.50336 37.97504-32.49664 51.62496-50.98496-12.23168-15.36-23.53664-28.23168-33.92-38.61504-10.38336-10.38336-19.98336-18.56-28.8-24.53504l19.62496-22.18496c9.95328 8.81664 19.91168 18.84672 29.86496 30.08C472.46336 539.66336 481.42336 550.68672 489.38496 561.49504L489.38496 561.49504z"  ></path>' +
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