import img1 from "@/asset/Images/DSC07024 (1).jpg"

export default function GoalsSection() {
  const goals = [
    {
      title: "Lan tỏa kiến thức & vai trò cha mẹ",
      points: [
        "Lan tỏa kiến thức đúng, đầy đủ và phù hợp đến cộng đồng phụ huynh",
        "Mỗi cha mẹ là chuyên gia cho con mình",
      ],
      image: "https://readdy.ai/api/search-image?query=loving%20parents%20teaching%20and%20sharing%20knowledge%20with%20their%20children%20in%20a%20warm%20family%20environment%2C%20parental%20guidance%20and%20education%2C%20multi-generational%20family%20learning%20together%2C%20caring%20parent-child%20relationship%20with%20books%20and%20educational%20materials%2C%20soft%20natural%20lighting%2C%20nurturing%20home%20atmosphere&width=400&height=300&seq=parentknowledge001&orientation=landscape"
    },
    {
      title: "Hành trình hướng nghiệp",
      points: [
        "Hướng nghiệp cho con là một hành trình dài, không phải điểm đến",
        "Hướng nghiệp cho con càng sớm càng tốt"
      ],
      image: `${img1}`
    },
    {
      title: "Phân biệt & nhận thức đúng",
      points: [
       "Hiểu rõ việc hướng nghiệp khác với thông tin tuyển sinh",
       "Hiểu rõ được năng lực, sở trường, đam mê, sứ mệnh của con",
      ],
      image: "https://readdy.ai/api/search-image?query=educational%20guidance%20and%20career%20counseling%20session%20with%20parents%20and%20children%20discussing%20future%20paths%2C%20professional%20career%20orientation%20meeting%2C%20family%20making%20important%20educational%20decisions%20together%2C%20consultation%20about%20academic%20and%20career%20choices%2C%20warm%20office%20environment%20with%20educational%20materials%20and%20charts%20showing%20different%20career%20paths&width=400&height=300&seq=careerguide001&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-target-fill mr-2 w-4 h-4 flex items-center justify-center inline-flex"></i>
            Mục tiêu
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            BÌNH DÂN HỌC VỤ HƯỚNG NGHIỆP DÀNH CHO CỘNG ĐỒNG.
          </h2>
          <p className="text-2xl text-green-600 font-bold">
            Và Chúng Tôi Có Thể Giúp Bạn
          </p>
        </div>

        <div className="space-y-16">
          {goals.map((goal, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                    {goal.title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {goal.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-white text-sm w-3 h-3 flex items-center justify-center"></i>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={goal.image}
                    alt={`Goal ${index + 1}`}
                    className="w-full h-[400px] object-cover object-fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>                
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
