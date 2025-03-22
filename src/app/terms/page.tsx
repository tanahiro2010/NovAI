export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">利用規約</h1>
      
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. はじめに</h2>
          <p className="mb-4">
            本利用規約（以下「本規約」）は、NovAI（以下「当サービス」）の利用条件を定めるものです。
            当サービスをご利用いただく際は、本規約に同意していただく必要があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 定義</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>「ユーザー」とは、当サービスを利用する全ての方を指します。</li>
            <li>「コンテンツ」とは、当サービス上で提供される全ての情報、テキスト、画像、データ等を指します。</li>
            <li>「投稿コンテンツ」とは、ユーザーが当サービスに投稿した全てのコンテンツを指します。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. アカウント</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ユーザーは、当サービスを利用するためにアカウントを作成する必要があります。</li>
            <li>アカウント情報は、正確かつ最新の情報を提供する必要があります。</li>
            <li>アカウントの管理責任は、ユーザーにあります。</li>
            <li>アカウントの不正利用を発見した場合は、直ちに当サービスに報告してください。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 禁止事項</h2>
          <p className="mb-4">以下の行為は禁止されています：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当サービスの運営を妨害する行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>他のユーザーに成りすます行為</li>
            <li>当サービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 知的財産権</h2>
          <p className="mb-4">
            当サービスで提供されるコンテンツの知的財産権は、当サービスまたはその提供者に帰属します。
            ユーザーは、当サービスの利用に必要な範囲でのみ、これらのコンテンツを利用することができます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 免責事項</h2>
          <p className="mb-4">
            当サービスは、以下の事項について一切の責任を負いません：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>ユーザー間の取引に関する責任</li>
            <li>投稿コンテンツの正確性、完全性、有用性等</li>
            <li>当サービスの利用により生じた損害</li>
            <li>当サービスの一時的な中断、変更、終了等による損害</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">7. サービス変更・終了</h2>
          <p className="mb-4">
            当サービスは、事前の通知なく、サービスの内容を変更し、または終了することがあります。
            これにより生じた損害について、当サービスは一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 規約の変更</h2>
          <p className="mb-4">
            当サービスは、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができます。
            変更後の規約は、当サービス上に掲載された時点で効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">9. 準拠法・管轄裁判所</h2>
          <p className="mb-4">
            本規約の解釈にあたっては、日本法を準拠法とします。
            当サービスに関して紛争が生じた場合には、当サービスの本店所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">10. お問い合わせ</h2>
          <p className="mb-4">
            本規約に関するお問い合わせは、以下のメールアドレスまでお願いいたします：
            <br />
            <a href="mailto:support@novai.com" className="text-amber-600 hover:text-amber-500">
              support@novai.com
            </a>
          </p>
        </section>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>最終更新日：2024年3月22日</p>
      </div>
    </div>
  );
}
