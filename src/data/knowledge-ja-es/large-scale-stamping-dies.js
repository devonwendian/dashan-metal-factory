export default {
  title: {
    ja: '大型プレス金型：設計と応用',
    es: 'Troqueles de estampado a gran escala: diseño y aplicaciones',
  },
  description: {
    ja: '大型プレス金型の設計原則、課題、自動車・航空宇宙などでの応用を解説。カスタム金型加工やステンレスプレスとの関係にも触れます。',
    es: 'Principios de diseño, retos y aplicaciones de troqueles de gran tamaño para piezas metálicas de alta precisión en automoción, aeroespacial y más.',
  },
  content: {
    ja: `
        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">大型プレス金型の概要</h2>
        <p class="text-gray-600 leading-relaxed mb-6">大型金型は高トン数プレスと組み合わせ、広幅金属板を切断・曲げ・成形して複雑形状の部品を量産する中核ツールです。<strong>カスタム金型加工</strong>や<strong>ステンレスプレス</strong>において品質と寿命を左右します。</p>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">設計の要点</h2>
        <ul class="list-none space-y-2 mb-6">
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>材料：</strong>D2/A2など高強度工具鋼。ステンレス向けには超硬インサートも。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>形状：</strong>スプリングバックと板厚ばらつきをCAD/FEAで最適化。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>クリアランス：</strong>バリ・裂けを防ぎつつ大型金型全体の公差を管理。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>潤滑・冷却：</strong>摩耗と発熱を抑え品質を安定化。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>モジュール化：</strong>摩耗部の交換とメンテナンス性。</span></li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">主な課題</h2>
        <ul class="list-none space-y-2 mb-6">
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>材料挙動：</strong>大型板のスプリングバックやシワ。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>摩耗：</strong>高荷重と研磨性材で寿命が短くなりやすい。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>コスト・納期：</strong>サイズと精度要求が製作を難しくする。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>搬送・セットアップ：</strong>大型金型の据付と位置決め。</span></li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">応用</h2>
        <ul class="list-none space-y-2 mb-6">
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>自動車：</strong>外板、シャシー、燃料タンク。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>航空宇宙：</strong>アルミ・チタンなどの大型スキン・ケース。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>産業機械：</strong>圧力容器、頑丈な筐体。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>カスタム金型加工：</strong>顧客仕様に合わせた一品・小ロットも。</span></li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">利点</h2>
        <ul class="list-none space-y-2 mb-6">
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>高精度：</strong>大量生産でも寸法が揃う。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>材料効率：</strong>広幅板の活用でロス低減。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>耐久性：</strong>加工硬化で部品強度が向上することも。</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>スケール：</strong>大量からカスタム小ロットまで。</span></li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">メーカー選定のポイント</h2>
        <p class="text-gray-600 leading-relaxed mb-6">設備、材種ごとの実績、カスタム対応力、品質管理体制を確認することが重要です。</p>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">まとめ</h2>
        <p class="text-gray-600 leading-relaxed mb-6">大型プレス金型は金属成形の要です。設計と保守の工夫が<strong>カスタム金型加工</strong>と<strong>ステンレスプレス</strong>の安定品質を支えます。</p>
      `,
    es: `
        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">Introducción</h2>
        <p class="text-gray-600 leading-relaxed mb-6">Los troqueles de estampado a gran escala, usados con prensas de alto tonelaje, conforman láminas metálicas grandes en piezas complejas. Son clave para el <strong>mecanizado de herrajes a medida</strong> y el <strong>estampado de acero inoxidable</strong>.</p>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">Principios de diseño</h2>
        <ul class="list-none space-y-2 mb-6">
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Materiales:</strong> aceros para herramientas (D2/A2); insertos de carburo para inoxidable abrasivo.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Geometría:</strong> CAD/FEA para compensar rebote y variación de espesor.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Holguras:</strong> evitan rebabas y desgarros en troqueles enormes.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Lubricación y refrigeración:</strong> reducen desgaste y mejoran la calidad.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Modularidad:</strong> sustitución de zonas desgastadas y mantenimiento.</span></li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">Retos</h2>
        <ul class="list-none space-y-2 mb-6">
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Comportamiento del material:</strong> rebote y arrugas en láminas grandes.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Desgaste acelerado</strong> por fuerzas y materiales abrasivos.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Coste y plazos</strong> de fabricación del troquel.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Manejo y puesta a punto</strong> de troqueles sobredimensionados.</span></li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">Aplicaciones</h2>
        <ul class="list-none space-y-2 mb-6">
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Automoción:</strong> paneles, chasis, depósitos.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Aeroespacial:</strong> paneles y carcasas en aluminio o titanio.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Equipo industrial:</strong> recipientes y carcasas robustas.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Herrajes a medida:</strong> piezas bajo especificación del cliente.</span></li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">Ventajas</h2>
        <ul class="list-none space-y-2 mb-6">
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Alta precisión</strong> en series largas.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Eficiencia de material</strong> y menor desperdicio.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Durabilidad</strong> de la pieza por endurecimiento por deformación.</span></li>
          <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-600"><strong>Escalabilidad</strong> de volumen alto a lotes personalizados.</span></li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">Elegir fabricante</h2>
        <p class="text-gray-600 leading-relaxed mb-6">Evalúe equipamiento, experiencia por material, historial en soluciones a medida y control de calidad.</p>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">Conclusión</h2>
        <p class="text-gray-600 leading-relaxed mb-6">Los troqueles de gran escala impulsan la eficiencia y la precisión del conformado metálico; el diseño avanzado refuerza el <strong>mecanizado de herrajes a medida</strong> y el <strong>estampado de acero inoxidable</strong>.</p>
      `,
  },
};
